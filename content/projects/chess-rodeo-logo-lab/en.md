---
title: "chess.rodeo Logo Lab"
date: 2026-05-18
featured: false
---

Went through 30+ typefaces from six foundries to figure out how exactly to set "chess.rodeo." Landed on Euclid Flex with stylistic set ss01 — its squared-off shapes read both as chessboard squares and as a rodeo champion's belt buckle.

## Why

chess.rodeo had a working but bland logo — just text in the default UI typeface. I wanted the logo itself to carry meaning: hint at both chess and the "rodeo" — the fast, untamed game.

The idea was to build a single lab page where every variant sits side by side, so I could scroll and compare for real: "C with a small r inside" monograms, "Chess rodeo" wordmarks, knight-as-r variants like "Chess ♞odeo" and "C♞". All across the same 30+ typefaces. There's no other way to tell what actually works.

## What went into the comparison

The backbone is Swiss Typefaces, my favorite foundry for UI work:

- **[Suisse](https://www.swisstypefaces.com/fonts/suisse/)** — Intl, Cond, Neue, Screen, Works. The whole family, from classic Helvetica-like Intl to the screen-tuned Screen cut.
- **[Euclid](https://www.swisstypefaces.com/fonts/euclid/)** — Circular A/B (like Circular Mono), Flex (the hero), Square (already in chess.rodeo's UI), Triangle.
- **[SangBleu](https://www.swisstypefaces.com/fonts/sang-bleu/)** — Kingdom and Empire. Serifs with character.

Then some experimental / "character" picks to see the full range:

- **[New Paris](https://productiontype.com/family/new-paris)** from Production Type — King Size and Air, a grotesque with a French accent.
- **TheW NYC** — a magazine typeface with a Clan sub-series (ODB, GZA, RZA — yes, Wu-Tang references). Just to play with.
- **Raskal Oner** — Cyrillic graffiti script. To see if "rodeo" reads better hand-written.
- **BRRR** — a fun stylistic set called "Skrrt," rap ad-libs as typography.
- **Only Extended** in three weights — wide grotesque with airy grace.
- **I Can See You All** — one all-caps cut.

And **Chessvetica** by Fay Does Design — a special typeface with chess piece glyphs, used here as the "knight" in the "Chess ♞odeo" variants.

## Full lab

All 30+ variants are right below — scroll and toggle the knight (filled ↔ outlined):

<style>
@font-face { font-family: 'LL Euclid Square'; src: url('/static/logo-lab/fonts/euclid-square/EuclidSquareRegular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'LL Chessvetica Regular'; src: url('/static/logo-lab/fonts/chessvetica/Chessvetica-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'LL Chessvetica Outlined'; src: url('/static/logo-lab/fonts/chessvetica/Chessvetica-Outlined.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Suisse Intl'; src: url('/static/logo-lab/fonts/suisse-intl/SuisseIntlTrial-Book.woff2') format('woff2'); font-weight: 450; font-display: swap; }
@font-face { font-family: 'Suisse Intl'; src: url('/static/logo-lab/fonts/suisse-intl/SuisseIntlTrial-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Suisse Intl Cond'; src: url('/static/logo-lab/fonts/suisse-intl-cond/SuisseIntlCond-Medium-WebTrial.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Suisse Intl Cond'; src: url('/static/logo-lab/fonts/suisse-intl-cond/SuisseIntlCond-Semibold-WebTrial.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Suisse Neue'; src: url('/static/logo-lab/fonts/suisse-neue/SuisseNeue-Regular-WebTrial.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Suisse Neue'; src: url('/static/logo-lab/fonts/suisse-neue/SuisseNeue-Medium-WebTrial.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Suisse Screen'; src: url('/static/logo-lab/fonts/suisse-screen/SuisseScreen-Regular-WebTrial.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Suisse Screen'; src: url('/static/logo-lab/fonts/suisse-screen/SuisseScreen-SemiBold-WebTrial.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Suisse Works'; src: url('/static/logo-lab/fonts/suisse-works/SuisseWorks-Book-WebTrial.woff2') format('woff2'); font-weight: 450; font-display: swap; }
@font-face { font-family: 'Suisse Works'; src: url('/static/logo-lab/fonts/suisse-works/SuisseWorks-Medium-WebTrial.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Circular A'; src: url('/static/logo-lab/fonts/euclid-circular-a/EuclidCircularA-Medium-WebS.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Circular A'; src: url('/static/logo-lab/fonts/euclid-circular-a/EuclidCircularA-Semibold-WebS.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Euclid Circular B'; src: url('/static/logo-lab/fonts/euclid-circular-b/EuclidCircularB-Medium-WebS.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Circular B'; src: url('/static/logo-lab/fonts/euclid-circular-b/EuclidCircularB-Semibold-WebS.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Euclid Flex'; src: url('/static/logo-lab/fonts/euclid-flex/EuclidFlex-Medium-WebS.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Flex'; src: url('/static/logo-lab/fonts/euclid-flex/EuclidFlex-Semibold-WebS.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Euclid Square'; src: url('/static/logo-lab/fonts/euclid-square/EuclidSquareMedium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Square'; src: url('/static/logo-lab/fonts/euclid-square/EuclidSquareSemiBold.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Euclid Triangle'; src: url('/static/logo-lab/fonts/euclid-triangle/EuclidTriangle-Medium-WebS.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Euclid Triangle'; src: url('/static/logo-lab/fonts/euclid-triangle/EuclidTriangle-Semibold-WebS.woff2') format('woff2'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Raskal Oner'; src: url('/static/logo-lab/fonts/raskal-oner/RaskalOnerTrial-Write-WebXL.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'TheW NYC'; src: url('/static/logo-lab/fonts/thew/TheWNYC-Regular-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'TheW Clan ODB'; src: url('/static/logo-lab/fonts/thew/TheWClan-ODB-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'TheW Clan GZA'; src: url('/static/logo-lab/fonts/thew/TheWClan-GZA-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'TheW Clan RZA'; src: url('/static/logo-lab/fonts/thew/TheWClan-RZA-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'BRRR'; src: url('/static/logo-lab/fonts/brrr/BRRRTrial-Skrrt-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'I Can See You All'; src: url('/static/logo-lab/fonts/ikanseeyouall/IKANSEEYOUALL-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'New Paris King Size'; src: url('/static/logo-lab/fonts/new-paris/NewParisKingSize-Regular-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'New Paris King Size Air'; src: url('/static/logo-lab/fonts/new-paris/NewParisKingSize-Air-WebTrial.woff2') format('woff2'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'SangBleu Kingdom'; src: url('/static/logo-lab/fonts/sangbleu/SangBleuKingdom-Regular-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'SangBleu Empire'; src: url('/static/logo-lab/fonts/sangbleu/SangBleuEmpire-Regular-WebTrial.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'Only Extended'; src: url('/static/logo-lab/fonts/only-extended/OnlyExtendedTrial-Regular.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'Only Extended Thin'; src: url('/static/logo-lab/fonts/only-extended/OnlyExtendedTrial-Thin.woff2') format('woff2'); font-weight: 100; font-display: swap; }
@font-face { font-family: 'Only Extended Hairline'; src: url('/static/logo-lab/fonts/only-extended/OnlyExtendedTrial-Hairline.woff2') format('woff2'); font-weight: 100; font-display: swap; }

#logolab.logolab { --ll-fg: #f5f5f5; --ll-muted: #888; --ll-border: #2a2a2a; --ll-bg: #0a0a0a; color: var(--ll-fg); background: var(--ll-bg); padding: 32px clamp(16px, 4vw, 64px); margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); margin-top: 32px; margin-bottom: 32px; width: 100vw; max-width: 100vw; box-sizing: border-box; }
.logolab .ll-toggle { display: inline-flex; align-items: center; gap: 10px; border: 1px solid var(--ll-border); border-radius: 999px; padding: 4px; margin-bottom: 24px; }
.logolab .ll-toggle legend { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ll-muted); padding: 0 12px; }
.logolab .ll-toggle label { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; padding: 6px 14px; border-radius: 999px; cursor: pointer; color: var(--ll-muted); }
.logolab .ll-toggle input[type="radio"] { position: absolute; opacity: 0; pointer-events: none; }
.logolab .ll-toggle label:has(input:checked) { background: var(--ll-fg); color: var(--ll-bg); }
.logolab .ll-row { display: grid; gap: 16px; border-top: 1px solid var(--ll-border); padding: 24px 0; }
.logolab .ll-row:first-of-type { border-top: 0; }
@media (min-width: 768px) { .logolab .ll-row { grid-template-columns: 200px minmax(0, 1fr); gap: 24px; } }
.logolab .ll-meta h3 { font-family: 'LL Euclid Square', system-ui, sans-serif; font-size: 18px; font-weight: 500; margin: 0 0 6px; color: var(--ll-fg); }
.logolab .ll-meta p { font-family: 'LL Euclid Square', system-ui, sans-serif; font-size: 13px; color: var(--ll-muted); margin: 0 0 6px; }
.logolab .ll-meta a { color: var(--ll-muted); }
.logolab .ll-specimen { overflow-x: auto; overflow-y: hidden; padding-bottom: 4px; }
.logolab .ll-grid { display: grid; gap: 16px; width: max-content; min-width: max-content; }
@media (min-width: 1280px) { .logolab .ll-grid { grid-template-columns: 300px max-content max-content max-content max-content max-content; grid-template-rows: auto auto; align-items: center; column-gap: 40px; row-gap: 14px; } }
.logolab .ll-stages { display: grid; grid-template-columns: 1fr 1fr; align-items: center; justify-items: center; gap: 8px; }
@media (min-width: 1280px) { .logolab .ll-stages { grid-row: span 2; gap: 4px; } }
.logolab .ll-stage { position: relative; width: 172px; height: 172px; display: flex; align-items: center; justify-content: center; }
.logolab .ll-stage.with-board::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(45deg, rgba(255,255,255,0.07) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.07) 75%), linear-gradient(45deg, rgba(255,255,255,0.07) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.07) 75%); background-size: calc(100% / 8) calc(100% / 8); background-position: 0 0, calc(100% / 16) calc(100% / 16); pointer-events: none; }
.logolab .ll-mono { position: relative; display: inline-flex; align-items: center; justify-content: center; width: 7.25rem; height: 7.25rem; }
.logolab .ll-mono.compact { width: 4.5rem; height: 4.5rem; }
.logolab .ll-mono .ll-c { font-size: 7.5rem; line-height: 1; user-select: none; }
.logolab .ll-mono.compact .ll-c { font-size: 4.5rem; }
.logolab .ll-mono .ll-inner { position: absolute; line-height: 1; user-select: none; }
.logolab .ll-wordmark { font-size: 2rem; line-height: 1; white-space: nowrap; }
.logolab .ll-knight { display: inline-block; font-family: 'LL Chessvetica Regular', sans-serif; line-height: 1; transform: translateY(0.02em); }
.logolab[data-knight="outlined"] .ll-knight { font-family: 'LL Chessvetica Outlined', sans-serif; }
.logolab .ll-legal { margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--ll-border); font-family: 'LL Euclid Square', system-ui, sans-serif; font-size: 12px; line-height: 1.6; color: var(--ll-muted); }
.logolab .ll-legal p { margin: 0 0 6px; color: var(--ll-muted); }
</style>

<div class="logolab" id="logolab" data-knight="filled">
  <fieldset class="ll-toggle">
    <legend>Knight</legend>
    <label><input type="radio" name="ll-knight" value="filled" checked> Filled</label>
    <label><input type="radio" name="ll-knight" value="outlined"> Outlined</label>
  </fieldset>
  <div id="ll-samples"></div>
  <div class="ll-legal">
    <p>Knight glyph — <a href="https://faydoesdesign.com/portfolio/chessvetica/" target="_blank" rel="noopener">Chessvetica</a> by Fay Does Design.</p>
    <p>All typefaces here are trial versions for evaluation. If you like one, support the foundry and buy a working license.</p>
  </div>
</div>

<script>
(function () {
  const root = document.getElementById('logolab');
  if (!root) return;
  const SAMPLES = [
    { id: 'suisse-intl', label: 'Suisse Intl', family: "'Suisse Intl'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse/' }, weight: 450, rWeight: 500, rSize: '1.95rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'suisse-intl-cond', label: 'Suisse Intl Cond', family: "'Suisse Intl Cond'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse/' }, weight: 500, rWeight: 600, rSize: '1.8rem', rLeft: '51.5%', rTop: '54%', tracking: '-0.04em' },
    { id: 'suisse-neue', label: 'Suisse Neue', family: "'Suisse Neue'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse/' }, weight: 400, rWeight: 500, rSize: '1.95rem', rLeft: '50%', rTop: '54.5%' },
    { id: 'suisse-screen', label: 'Suisse Screen', family: "'Suisse Screen'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse/' }, weight: 400, rWeight: 600, rSize: '1.9rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'suisse-works', label: 'Suisse Works', family: "'Suisse Works'", fallback: 'serif', note: 'Swiss Typefaces · trial · text serif', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse-works/' }, weight: 450, rWeight: 500, rSize: '2rem', rLeft: '50%', rTop: '56%' },
    { id: 'euclid-circular-a', label: 'Euclid Circular A', family: "'Euclid Circular A'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · pure circles', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-circular-b', label: 'Euclid Circular B', family: "'Euclid Circular B'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · heavier weights', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-flex', label: 'Euclid Flex', family: "'Euclid Flex'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · square ↔ round', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.9rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-square', label: 'Euclid Square', family: "'Euclid Square'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · already in chess.rodeo UI', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '50.5%', rTop: '54%' },
    { id: 'euclid-triangle', label: 'Euclid Triangle', family: "'Euclid Triangle'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · triangle geometry', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.9rem', rLeft: '50%', rTop: '54%' },
    { id: 'raskal-oner', label: 'Raskal Oner', family: "'Raskal Oner'", fallback: 'cursive', note: 'Cyrillic graffiti script', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 400, rWeight: 500, rSize: '1.6rem', rLeft: '51%', rTop: '58%' },
    { id: 'thew', label: 'TheW NYC', family: "'TheW NYC'", fallback: 'serif', note: 'Magazine display typeface', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 500, rSize: '1.8rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-odb', label: 'TheW Clan ODB', family: "'TheW Clan ODB'", fallback: 'serif', note: 'Clan series · Wu-Tang reference', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-gza', label: 'TheW Clan GZA', family: "'TheW Clan GZA'", fallback: 'serif', note: 'Clan series · Wu-Tang reference', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-rza', label: 'TheW Clan RZA', family: "'TheW Clan RZA'", fallback: 'serif', note: 'Clan series · Wu-Tang reference', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'brrr', label: 'BRRR', family: "'BRRR'", fallback: 'sans-serif', note: 'Stylistic set "Skrrt" · rap ad-lib', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '56%' },
    { id: 'i-can-see-you-all', label: 'I Can See You All', family: "'I Can See You All'", fallback: 'sans-serif', note: 'Trial · single all-caps cut', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 400, rWeight: 500, rSize: '1.85rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'new-paris', label: 'New Paris King Size', family: "'New Paris King Size'", fallback: 'serif', note: 'Production Type grotesque, King Size cut', foundry: { name: 'Production Type', url: 'https://productiontype.com/family/new-paris' }, weight: 400, rWeight: 500, rSize: '2rem', rLeft: '50%', rTop: '56%' },
    { id: 'new-paris-air', label: 'New Paris King Size Air', family: "'New Paris King Size Air'", fallback: 'serif', note: 'Production Type · airy version', foundry: { name: 'Production Type', url: 'https://productiontype.com/family/new-paris' }, weight: 300, rWeight: 300, rSize: '1.9rem', rLeft: '50%', rTop: '56%' },
    { id: 'sangbleu', label: 'SangBleu Kingdom', family: "'SangBleu Kingdom'", fallback: 'serif', note: 'Swiss Typefaces · text serif', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/sang-bleu/' }, weight: 400, rWeight: 500, rSize: '1.85rem', rLeft: '50%', rTop: '58%' },
    { id: 'sangbleu-empire', label: 'SangBleu Empire', family: "'SangBleu Empire'", fallback: 'serif', note: 'Swiss Typefaces · display', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/sang-bleu/' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'only-extended', label: 'Only Extended', family: "'Only Extended'", fallback: 'sans-serif', note: 'Trial · wide grotesque', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 400, rWeight: 400, rSize: '1.65rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
    { id: 'only-extended-thin', label: 'Only Extended Thin', family: "'Only Extended Thin'", fallback: 'sans-serif', note: 'Trial · thin weight', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 100, rWeight: 100, rSize: '1.55rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
    { id: 'only-extended-hairline', label: 'Only Extended Hairline', family: "'Only Extended Hairline'", fallback: 'sans-serif', note: 'Trial · hairline weight', foundry: { name: 'Trial · foundry TBD', url: '' }, weight: 100, rWeight: 100, rSize: '1.5rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
  ];
  const KNIGHT = { filled: "'LL Chessvetica Regular', sans-serif", outlined: "'LL Chessvetica Outlined', sans-serif" };
  function knight(size = '1em', shiftY = '0.02em') { return `<span class="ll-knight" style="font-size:${size};transform:translateY(${shiftY})">N</span>`; }
  function mono(s, opts = {}) {
    const compact = opts.compact === true;
    const innerText = opts.innerText ?? 'r';
    const innerFamily = opts.innerFamily ?? `${s.family}, ${s.fallback}`;
    const innerWeight = opts.innerWeight ?? s.rWeight ?? s.weight ?? 500;
    const tracking = s.tracking ? `letter-spacing:${s.tracking};` : '';
    return `<div class="ll-mono ${compact ? 'compact' : ''}" aria-hidden="true" style="font-family:${s.family}, ${s.fallback};${tracking}"><span class="ll-c" style="font-weight:${s.weight ?? 500}">C</span><span class="ll-inner" style="font-size:${s.rSize ?? (compact ? '1.35rem' : '1.95rem')};font-family:${innerFamily};font-weight:${innerWeight};left:${s.rLeft ?? '50%'};top:${s.rTop ?? '54%'};transform:${s.transform ?? 'translate(-50%, -50%)'}">${innerText}</span></div>`;
  }
  function wstyle(s) { const tracking = s.tracking ? `letter-spacing:${s.tracking};` : ''; return `font-family:${s.family}, ${s.fallback};font-weight:${s.rWeight ?? s.weight ?? 500};${tracking}`; }
  function row(s) {
    const ws = wstyle(s);
    const fName = s.foundry?.name ?? '';
    const fHtml = s.foundry?.url ? `<a href="${s.foundry.url}" target="_blank" rel="noopener">${fName}</a>` : fName;
    return `<article class="ll-row" id="ll-${s.id}"><div class="ll-meta"><h3>${s.label}</h3><p>${s.note}</p><p>${fHtml}</p></div><div class="ll-specimen"><div class="ll-grid"><div class="ll-stages"><div class="ll-stage">${mono(s)}</div><div class="ll-stage with-board">${mono(s, { innerText: 'N', innerFamily: 'var(--ll-knight-family)', innerWeight: 400 })}</div></div><div>${mono(s, { compact: true })}</div><div><span class="ll-wordmark" style="${ws}">Chess rodeo</span></div><div><span class="ll-wordmark" style="${ws}">Chess Rodeo</span></div><div><span class="ll-wordmark" style="${ws}">Cr</span></div><div><span class="ll-wordmark" style="${ws}">CR</span></div><div>${mono(s, { compact: true, innerText: 'N', innerFamily: 'var(--ll-knight-family)', innerWeight: 400 })}</div><div><span class="ll-wordmark" style="${ws}">Chess ${knight('0.8em','0.04em')}odeo</span></div><div><span class="ll-wordmark" style="${ws}">Chess ${knight('1em','0.02em')}odeo</span></div><div><span class="ll-wordmark" style="${ws}">C${knight('0.8em','0.04em')}</span></div><div><span class="ll-wordmark" style="${ws}">C${knight('1em','0.02em')}</span></div></div></div></article>`;
  }
  function setVariant(v) { root.dataset.knight = v; root.style.setProperty('--ll-knight-family', KNIGHT[v]); }
  document.getElementById('ll-samples').innerHTML = SAMPLES.map(row).join('');
  setVariant('filled');
  root.querySelectorAll('input[name="ll-knight"]').forEach(el => el.addEventListener('change', e => setVariant(e.target.value)));
})();
</script>
## What got cut and why

**Raskal and BRRR** were the first to go. Too loud. Chess projects come with a baseline expectation of typographic seriousness — even a fast online tool. Graffiti and hip-hop ad-libs made the logo feel unserious and broke the link to the actual game.

**TheW Clan (ODB/GZA/RZA)** was fun, but not mine. The aesthetic is very specific — 90s New York, Wu-Tang — and chess.rodeo is in a different context entirely.

**Suisse Neue / Works / Screen** — all three read as "reliable, but doesn't stand out." Workhorses, not logo material.

**SangBleu Kingdom and Empire** — the serifs were beautiful but not "playful." No chess, no rodeo — just good typographic taste.

**Round-only Euclid Circular A/B** — too soft. Circles don't grab onto the board idea.

## What stuck

**Euclid Flex** with stylistic set ss01.

![chess.rodeo logo in Euclid Flex ss01](cover.png "Final logo — Euclid Flex with ss01, squared proportions read both as a chessboard and a rodeo belt buckle")

Why:

- **Squared proportions**. Digits and most lowercase glyphs in Flex have an almost perfectly square bounding box. Every letter is a chessboard cell. No decorative tricks needed — the typeface itself already carries the idea.
- **Stylistic set ss01** swaps several glyphs (a, g, l, the dot on i) for more geometric versions. Without ss01, Flex drifts toward a "regular" grotesque; with ss01, it becomes distinctive.
- **Double reading**: the squares are both chessboard cells (8×8) and the silver belt buckles rodeo champions wear. One typeface, two associations. That's the "coincidence" I was looking for.
- **Scales well**. From a 16px favicon to a 1500px social banner — the shapes hold.

One unplanned bonus: Flex already pairs with **Euclid Square**, which is what runs in chess.rodeo's UI. Logo and interface — same family.

