#!/bin/bash
# Local Development Startup Script for koz.tv
# Uses global Caddy for *.localhost domain access
# Pattern: BrowserSync (file watcher + live reload) behind global Caddy reverse proxy

set -e

echo "Starting koz.tv Local Development..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Project root
cd "$(dirname "$0")"
PROJECT_DIR="$(pwd)"

# Global Caddy config directory
CADDY_CONFIG_DIR="$HOME/.config/koztv-dev"
CADDY_BRANCHES_DIR="$CADDY_CONFIG_DIR/branches"
GLOBAL_CADDYFILE="$HOME/.config/chess-dev/Caddyfile"

# Generate stable port from branch name (range 15000-15999)
get_branch_port() {
    local branch_name="$1"
    if command -v md5sum &> /dev/null; then
        local hash=$(echo -n "koztv-$branch_name" | md5sum | cut -c1-8)
    else
        local hash=$(echo -n "koztv-$branch_name" | md5 | cut -c1-8)
    fi
    local hash_decimal=$((16#$hash))
    local port=$((15000 + (hash_decimal % 1000)))
    echo $port
}

# Cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}Stopping all services...${NC}"
    if [ ! -z "$BUILD_PID" ]; then
        kill $BUILD_PID 2>/dev/null || true
    fi
    if [ ! -z "$BROWSERSYNC_PID" ]; then
        kill $BROWSERSYNC_PID 2>/dev/null || true
    fi

    # Unregister branch from global Caddy
    if [ ! -z "$BRANCH_CADDY_FILE" ] && [ -f "$BRANCH_CADDY_FILE" ]; then
        rm -f "$BRANCH_CADDY_FILE"
        echo -e "${CYAN}   Unregistered from global Caddy${NC}"
        caddy reload --config "$GLOBAL_CADDYFILE" 2>/dev/null || true
    fi

    echo -e "${GREEN}All services stopped${NC}"
    exit 0
}

trap cleanup SIGINT SIGTERM

# --- Branch detection ---
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
SANITIZED_BRANCH=$(echo "$CURRENT_BRANCH" | sed 's/[^a-zA-Z0-9]/_/g' | tr '[:upper:]' '[:lower:]')
DOMAIN_BRANCH=$(echo "$CURRENT_BRANCH" | sed 's/[^a-zA-Z0-9]/-/g' | tr '[:upper:]' '[:lower:]')

# Port assignment — BrowserSync listens here, global Caddy proxies to it
BROWSERSYNC_PORT=$(get_branch_port "$CURRENT_BRANCH")

echo -e "${GREEN}   Branch: ${CURRENT_BRANCH}${NC}"
echo -e "${GREEN}   Port: ${BROWSERSYNC_PORT}${NC}"

# --- Step 1: Register with global Caddy ---
echo -e "${BLUE}1. Configuring Caddy reverse proxy...${NC}"

mkdir -p "$CADDY_BRANCHES_DIR"
BRANCH_CADDY_FILE="$CADDY_BRANCHES_DIR/${SANITIZED_BRANCH}.caddy"
cat > "$BRANCH_CADDY_FILE" << EOF
http://koztv-${DOMAIN_BRANCH}.localhost {
    reverse_proxy localhost:${BROWSERSYNC_PORT}
}
EOF
echo -e "${GREEN}   Registered: http://koztv-${DOMAIN_BRANCH}.localhost${NC}"

# Ensure koztv import exists in global Caddyfile
if [ -f "$GLOBAL_CADDYFILE" ]; then
    if ! grep -q "koztv-dev/branches" "$GLOBAL_CADDYFILE"; then
        echo "import /Users/$USER/.config/koztv-dev/branches/*.caddy" >> "$GLOBAL_CADDYFILE"
        echo -e "${GREEN}   Added koztv import to global Caddyfile${NC}"
    fi
fi

# Reload global Caddy (admin API on localhost:2019)
if caddy reload --config "$GLOBAL_CADDYFILE" 2>/dev/null; then
    echo -e "${GREEN}   Global Caddy reloaded${NC}"
else
    echo -e "${YELLOW}   Global Caddy not running${NC}"
    echo -e "${CYAN}   Run once: sudo caddy start --config ~/.config/chess-dev/Caddyfile${NC}"
fi

# --- Step 2: Check dependencies ---
echo -e "${BLUE}2. Checking dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}   Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}   Dependencies installed${NC}"
else
    echo -e "${GREEN}   Dependencies already installed${NC}"
fi

# --- Step 3: Initial build ---
echo -e "${BLUE}3. Building site...${NC}"
mkdir -p logs
if [ ! -f "docs/index.html" ]; then
    node engine/build.js > "logs/build.log" 2>&1
    echo -e "${GREEN}   Initial build complete${NC}"
else
    echo -e "${GREEN}   docs/ already exists, skipping initial build${NC}"
fi

# --- Step 4: Start dev server ---
echo -e "${BLUE}4. Starting dev server...${NC}"

# Free BrowserSync port if occupied
pids=$(lsof -ti :$BROWSERSYNC_PORT 2>/dev/null || true)
if [ -n "$pids" ]; then
    echo -e "${YELLOW}   Killing process on port $BROWSERSYNC_PORT${NC}"
    kill -9 $pids 2>/dev/null || true
    sleep 1
fi

# Start build watcher
node engine/build.js --watch > "logs/build.log" 2>&1 &
BUILD_PID=$!

# Start BrowserSync via API (CLI in v3 doesn't inject live-reload snippet)
BROWSERSYNC_PORT=$BROWSERSYNC_PORT node -e "
  import browserSync from 'browser-sync';
  import bsConfig from './engine/lib/bs-config.js';
  const bs = browserSync.create();
  bs.init({ ...bsConfig, port: +process.env.BROWSERSYNC_PORT, open: false });
" > "logs/browsersync.log" 2>&1 &
BROWSERSYNC_PID=$!

sleep 2
echo -e "${GREEN}   Build watcher started (PID: $BUILD_PID)${NC}"
echo -e "${GREEN}   BrowserSync started on port $BROWSERSYNC_PORT (PID: $BROWSERSYNC_PID)${NC}"

# --- Banner ---
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}koz.tv dev server running with hot reload${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  Site:        ${BLUE}http://koztv-${DOMAIN_BRANCH}.localhost${NC}"
echo -e "  BrowserSync: ${BLUE}http://localhost:${BROWSERSYNC_PORT}${NC}"
echo ""
echo -e "  Build logs:       ${CYAN}tail -f logs/build.log${NC}"
echo -e "  BrowserSync logs: ${CYAN}tail -f logs/browsersync.log${NC}"
echo -e "  Press ${YELLOW}Ctrl+C${NC} to stop all services"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Keep script alive — Ctrl+C triggers cleanup
wait
