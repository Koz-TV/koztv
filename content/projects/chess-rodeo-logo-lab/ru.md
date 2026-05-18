---
title: "Лаборатория логотипа chess.rodeo"
date: 2026-05-18
featured: false
---

Прошёл через 30+ шрифтов от шести фаундри, чтобы выбрать как именно набирать «chess.rodeo». В итоге остановился на Euclid Flex со стилистическим набором ss01 — у него квадратные формы, которые читаются и как клетки шахматной доски, и как пряжка ремня родео-чемпиона.

## Зачем вообще

У chess.rodeo был рабочий, но безликий логотип — просто текст в дефолтном UI-шрифте. Хотелось чтобы сам логотип нёс смысл: одновременно намекал и на шахматы, и на ту самую «родео» — необузданную, быструю игру.

Идея была собрать страницу-лабораторию, где все варианты лежат рядом, и можно листать и сравнивать вживую: монограммы «C с маленькой r внутри», варианты «Chess rodeo», варианты с конём вместо буквы r — «Chess ♞odeo», «C♞». В одних и тех же 30+ шрифтах. Иначе невозможно понять, какой реально работает.

## Что попало в подбор

Костяк — Swiss Typefaces, мой любимый фаундри для UI-шрифтов:

- **[Suisse](https://www.swisstypefaces.com/fonts/suisse/)** — Intl, Cond, Neue, Screen, Works. Всё семейство, от классической Helvetica-подобной Intl до читабельной экранной Screen.
- **[Euclid](https://www.swisstypefaces.com/fonts/euclid/)** — Circular A/B (как Circular Mono), Flex (главный герой), Square (тот, что уже в UI chess.rodeo), Triangle.
- **[SangBleu](https://www.swisstypefaces.com/fonts/sang-bleu/)** — Kingdom и Empire. Антиквы с характером.

Дальше — экспериментальные и «характерные» варианты, чтобы понять диапазон:

- **[New Paris](https://productiontype.com/family/new-paris)** от Production Type — King Size и Air, гротеск с французским акцентом.
- **TheW NYC** — журнальный шрифт с подсерией Clan (ODB, GZA, RZA — отсылки к Wu-Tang). Чисто на потрогать.
- **Raskal Oner** — кириллический граффити-рукопис. Чтобы посмотреть, не звучит ли «родео» лучше в рукописи.
- **BRRR** — забавный стилистический сет «Skrrt», ad-lib рэпа в типографике.
- **Only Extended** в трёх весах — широкий гротеск с воздушной грацией.
- **I Can See You All** — одно начертание all-caps.

И ещё **Chessvetica** by Fay Does Design — это специальный шрифт с глифами шахматных фигур, я использовал его как «коня» в вариантах «Chess ♞odeo».

## Полная лаборатория

Все 30+ вариантов — ниже, можно листать и переключать коня (залитый ↔ контурный):

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
    <legend>Конь</legend>
    <label><input type="radio" name="ll-knight" value="filled" checked> Залитый</label>
    <label><input type="radio" name="ll-knight" value="outlined"> Контурный</label>
  </fieldset>
  <div id="ll-samples"></div>
  <div class="ll-legal">
    <p>Иконка коня — <a href="https://faydoesdesign.com/portfolio/chessvetica/" target="_blank" rel="noopener">Chessvetica</a> by Fay Does Design.</p>
    <p>Все шрифты на странице — пробные (trial) версии для оценки. Если шрифт вам понравился, поддержите фаундри и купите рабочую лицензию.</p>
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
    { id: 'suisse-works', label: 'Suisse Works', family: "'Suisse Works'", fallback: 'serif', note: 'Swiss Typefaces · trial · текстовый', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/suisse-works/' }, weight: 450, rWeight: 500, rSize: '2rem', rLeft: '50%', rTop: '56%' },
    { id: 'euclid-circular-a', label: 'Euclid Circular A', family: "'Euclid Circular A'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · идеально круглый', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-circular-b', label: 'Euclid Circular B', family: "'Euclid Circular B'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · более «жирный» вариант', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-flex', label: 'Euclid Flex', family: "'Euclid Flex'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · многоликий — то квадрат, то круг', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.9rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'euclid-square', label: 'Euclid Square', family: "'Euclid Square'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · уже стоит в UI chess.rodeo', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.95rem', rLeft: '50.5%', rTop: '54%' },
    { id: 'euclid-triangle', label: 'Euclid Triangle', family: "'Euclid Triangle'", fallback: 'sans-serif', note: 'Swiss Typefaces · trial · треугольная геометрия', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/euclid/' }, weight: 500, rWeight: 600, rSize: '1.9rem', rLeft: '50%', rTop: '54%' },
    { id: 'raskal-oner', label: 'Raskal Oner', family: "'Raskal Oner'", fallback: 'cursive', note: 'Кириллический граффити-рукопис', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 400, rWeight: 500, rSize: '1.6rem', rLeft: '51%', rTop: '58%' },
    { id: 'thew', label: 'TheW NYC', family: "'TheW NYC'", fallback: 'serif', note: 'Шрифт-обложка журнала The W', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 500, rSize: '1.8rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-odb', label: 'TheW Clan ODB', family: "'TheW Clan ODB'", fallback: 'serif', note: 'Серия Clan · отсылка к Wu-Tang', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-gza', label: 'TheW Clan GZA', family: "'TheW Clan GZA'", fallback: 'serif', note: 'Серия Clan · отсылка к Wu-Tang', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'thew-clan-rza', label: 'TheW Clan RZA', family: "'TheW Clan RZA'", fallback: 'serif', note: 'Серия Clan · отсылка к Wu-Tang', foundry: { name: 'TheW NYC · Eric Hu', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'brrr', label: 'BRRR', family: "'BRRR'", fallback: 'sans-serif', note: 'Стилистический сет «Skrrt» · ad-lib рэпа', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '56%' },
    { id: 'i-can-see-you-all', label: 'I Can See You All', family: "'I Can See You All'", fallback: 'sans-serif', note: 'Trial · одно начертание all-caps', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 400, rWeight: 500, rSize: '1.85rem', rLeft: '49.5%', rTop: '54%' },
    { id: 'new-paris', label: 'New Paris King Size', family: "'New Paris King Size'", fallback: 'serif', note: 'Гротеск Production Type, King Size cut', foundry: { name: 'Production Type', url: 'https://productiontype.com/family/new-paris' }, weight: 400, rWeight: 500, rSize: '2rem', rLeft: '50%', rTop: '56%' },
    { id: 'new-paris-air', label: 'New Paris King Size Air', family: "'New Paris King Size Air'", fallback: 'serif', note: 'Production Type · «воздушная» версия', foundry: { name: 'Production Type', url: 'https://productiontype.com/family/new-paris' }, weight: 300, rWeight: 300, rSize: '1.9rem', rLeft: '50%', rTop: '56%' },
    { id: 'sangbleu', label: 'SangBleu Kingdom', family: "'SangBleu Kingdom'", fallback: 'serif', note: 'Swiss Typefaces · текстовый антиквой', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/sang-bleu/' }, weight: 400, rWeight: 500, rSize: '1.85rem', rLeft: '50%', rTop: '58%' },
    { id: 'sangbleu-empire', label: 'SangBleu Empire', family: "'SangBleu Empire'", fallback: 'serif', note: 'Swiss Typefaces · титульный', foundry: { name: 'Swiss Typefaces', url: 'https://www.swisstypefaces.com/fonts/sang-bleu/' }, weight: 400, rWeight: 400, rSize: '1.7rem', rLeft: '50%', rTop: '57%' },
    { id: 'only-extended', label: 'Only Extended', family: "'Only Extended'", fallback: 'sans-serif', note: 'Trial · широкий гротеск', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 400, rWeight: 400, rSize: '1.65rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
    { id: 'only-extended-thin', label: 'Only Extended Thin', family: "'Only Extended Thin'", fallback: 'sans-serif', note: 'Trial · тонкое начертание', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 100, rWeight: 100, rSize: '1.55rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
    { id: 'only-extended-hairline', label: 'Only Extended Hairline', family: "'Only Extended Hairline'", fallback: 'sans-serif', note: 'Trial · волосяная линия', foundry: { name: 'Trial · фаундри уточнить', url: '' }, weight: 100, rWeight: 100, rSize: '1.5rem', rLeft: '51%', rTop: '56%', tracking: '-0.05em' },
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
## Что отвалилось и почему

**Раскал и BRRR** — отвалились первыми. Слишком кричащие. У шахматных проектов есть базовое ожидание «серьёзности» в наборе — даже у быстрого онлайн-сервиса. Граффити-рукопис и хип-хоп ad-lib делали логотип несерьёзным, теряли связь с самой игрой.

**TheW Clan (ODB/GZA/RZA)** — было весело, но не моё. Эта эстетика слишком конкретная — про Нью-Йорк 90-х и Wu-Tang, а у chess.rodeo контекст вообще другой.

**Suisse Neue / Works / Screen** — все три читались как «надёжно, но не выделяется». Это базовые рабочие лошадки, в логотип не превращаются.

**SangBleu Kingdom и Empire** — антиквой получалось красиво, но не «играющим». Не было ни шахмат, ни родео — был только хороший типографский вкус.

**Только круглые Euclid Circular A/B** — слишком мягкие. Кругляши не цепляются за идею доски.

## На чём остановился

**Euclid Flex** со стилистическим набором ss01.

![chess.rodeo логотип в Euclid Flex ss01](cover.png "Финальный логотип — Euclid Flex со ss01, квадратные пропорции читаются и как доска, и как пряжка родео")

Почему:

- **Квадратные пропорции**. Цифры и большая часть строчных в Flex имеют почти идеально квадратный bounding box. Каждая буква — как клетка на доске. Не нужно никаких декоративных приёмов — сам шрифт уже несёт идею.
- **Стилистический набор ss01** переключает несколько форм (a, g, l, точка над i) на более геометрические. Без ss01 Flex дрейфует в сторону «обычного» гротеска; с ss01 — становится узнаваемым.
- **Двойное прочтение**: квадраты — это и шахматная доска (8×8), и серебряная пряжка ремня, какие носят чемпионы родео. Один шрифт, два повода для ассоциаций. Это и было то «совпадение», которое я искал.
- **Хорошо масштабируется**. От favicon 16px до баннера соцсетей 1500px — формы не теряются.

И ещё один незапланированный бонус: Flex уже сочетается с **Euclid Square**, который и так стоит в UI chess.rodeo. Логотип и интерфейс — одно семейство.

