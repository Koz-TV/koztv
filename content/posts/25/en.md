---
tag: dev
title: "How I set up a hotkey to strip indents when copying from the terminal"
date: 2026-05-18
lang: en
original_link: "https://t.me/koztv/23"
slug: "how-i-set-up-a-hotkey-to-strip-indents-when-copying-from-the-terminal"
translated_from: "ru"
---

I work in Claude Code through Wave Terminal. Noticed a small annoyance: whenever I copy an assistant reply and paste it somewhere, every line gets two extra spaces at the start.

At first I thought the assistant itself was inserting trailing spaces. Asked it not to. Didn't help. I started digging — turns out it's the renderer: the terminal indents the assistant's text by two spaces to visually separate it from my input. When you copy, that indent honestly lands in the clipboard.

iTerm2 has an option for this called "Trim trailing whitespace when copying". Wave doesn't. Claude Code's settings don't have anything similar either.

I decided to bind clipboard cleanup to a hotkey via Hammerspoon. Simple idea: hit Cmd+Shift+V, a Lua script grabs the clipboard, strips the two leading spaces from every line, puts it back, and emulates a regular Cmd+V.

Sounds like ten lines of code. In practice I collected a set of pitfalls.

**Pitfall 1.** The Hammerspoon hotkey API registers a combo by character. When I wrote `hs.hotkey.bind({"cmd","shift"}, "v", ...)`, it looked at the active keyboard layout. At the moment Hammerspoon loaded my layout was Russian — and on the Russian layout the physical V key produces the letter "м". The hotkey registered as ⌘⇧м and worked only when Russian was active. Switched to English — nothing happens.

**Pitfall 2.** I tried passing a raw keycode as a number — 9 is the physical V key on any layout. `bindSpec` accepts a number but silently ignores it and still looks for a string. `bind` accepts the number, but it didn't fire on a physical keypress — apparently something at the Carbon Events level breaks with a non-Latin layout.

In the end I threw out the hotkey API entirely and moved to `hs.eventtap.new` — that's interception at the CGEventTap level, below applications and below layouts. I get a raw keyDown event and check modifiers and keycode 9 manually. Works everywhere.

**Pitfall 3.** The most annoying one. After all the fixes I restart Hammerspoon, the config loads, `hs.accessibilityState()` returns true. But eventtap doesn't receive a single event. I physically press Cmd+Shift+V — logs are empty. I send it programmatically via `hs.eventtap.event.newKeyEvent(...):post()` — it fires.

Went to System Settings → Privacy & Security → Accessibility. Hammerspoon was there, toggle on. I flipped it OFF, waited two seconds, flipped it back ON. Restarted Hammerspoon. Worked.

Looks like after `pkill` macOS cached the permission in a "kinda granted but not really" state. The re-toggle reissues the actual permission for the low-level event tap. `accessibilityState()` was lying the whole time.

**Bottom line:** Cmd+Shift+V now cleans the clipboard before pasting. Regular Cmd+V still works the same. If this ever breaks again — I know what to check first.

Final `~/.hammerspoon/init.lua`:

```lua
local function cleanText(s)
  if s == nil or s == "" then return s end
  s = s:gsub("^  ", "")           -- leading 2 spaces at the very start
  s = s:gsub("\n  ", "\n")        -- leading 2 spaces after every newline
  s = s:gsub("[ \t]+\n", "\n")    -- trailing whitespace before newlines
  s = s:gsub("[ \t]+$", "")       -- trailing whitespace at the very end
  return s
end

local tap = hs.eventtap.new({hs.eventtap.event.types.keyDown}, function(event)
  local flags = event:getFlags()
  -- keycode 9 = physical V key on US ANSI, independent of layout
  if flags.cmd and flags.shift and not flags.alt and not flags.ctrl
     and event:getKeyCode() == 9 then
    local raw = hs.pasteboard.getContents()
    if raw == nil or raw == "" then return true end

    hs.pasteboard.setContents(cleanText(raw))

    -- post a synthetic Cmd+V to the focused app
    hs.timer.doAfter(0.02, function()
      hs.eventtap.event.newKeyEvent({"cmd"}, 9, true):post()
      hs.timer.usleep(20000)
      hs.eventtap.event.newKeyEvent({"cmd"}, 9, false):post()
    end)
    -- restore the original clipboard after the paste completes
    hs.timer.doAfter(0.6, function()
      hs.pasteboard.setContents(raw)
    end)

    return true  -- consume the original Cmd+Shift+V so the app doesn't also see it
  end
  return false
end)
tap:start()

-- auto-reload on config edit
hs.pathwatcher.new(os.getenv("HOME") .. "/.hammerspoon/", function(files)
  for _, f in ipairs(files) do
    if f:match("%.lua$") then hs.reload(); return end
  end
end):start()

hs.alert.show("Hammerspoon: Cmd+Shift+V for clean paste")
```
