---
tag: dev
title: "Как я настраивал хоткей чтобы убирать отступы при копировании из терминала"
date: 2026-05-18
lang: ru
original_link: "https://t.me/koztv/25"
slug: "kak-ya-nastraival-hotkey-chtoby-ubirat-otstupy-pri-kopirovan"
---

Работаю в Claude Code через Wave Terminal. Заметил неприятную мелочь: когда копирую ответ ассистента и вставляю куда-нибудь — в начале каждой строки прилетают два лишних пробела.

Сначала я думал, это сам ассистент пишет с какими-то trailing-пробелами. Попросил его не делать так. Не помогло. Полез разбираться – оказалось, что это рендер: терминал сдвигает текст ассистента на два пробела влево, чтобы визуально отделить от моего ввода. При копировании этот сдвиг честно уезжает в буфер обмена.

У iTerm2 для такого есть опция «Trim trailing whitespace when copying». У Wave – нет. У Claude Code в настройках тоже ничего похожего не нашлось.

Решил повесить на хоткей очистку буфера через Hammerspoon. Идея простая: жмёшь Cmd+Shift+V, Lua-скрипт берёт содержимое буфера, режет ведущие два пробела на каждой строке, кладёт обратно и эмулирует обычный Cmd+V.

Звучит на 10 строк кода. На деле я собрал коллекцию граблей.

**Грабля 1.** Hammerspoon hotkey API регистрирует комбинацию по символу. Когда я писал `hs.hotkey.bind({"cmd","shift"}, "v", ...)`, он смотрел текущую раскладку. У меня в момент загрузки была русская – а на русской раскладке физическая клавиша V даёт букву "м". Хоткей зарегистрировался как ⌘⇧м и работал только в русской раскладке. Переключился на английскую – ничего не происходит.

**Грабля 2.** Попробовал передать чистый keycode числом – 9 это физическая клавиша V на любой раскладке. `bindSpec` принимает число, но молча его игнорирует и всё равно ищет строку. `bind` число принимает, но на физическое нажатие не реагировал – видимо что-то на уровне Carbon Events ломается с не-латинской раскладкой.

В итоге выкинул hotkey API целиком и переехал на `hs.eventtap.new` – это перехват на уровне CGEventTap, до приложений и до раскладки. Получаю чистый keyDown event, проверяю модификаторы и keycode 9 руками. Работает везде.

**Грабля 3.** Самая обидная. После всех правок Hammerspoon перезапускаю, конфиг загружается, `hs.accessibilityState()` возвращает true. А eventtap не получает ни одного события. Физически жму Cmd+Shift+V – в логах пусто. Программно через `hs.eventtap.event.newKeyEvent(...):post()` – срабатывает.

Полез в System Settings → Privacy & Security → Accessibility. Hammerspoon там есть, тумблер включён. Переключил OFF, подождал две секунды, обратно ON. Перезапустил Hammerspoon. Заработало.

Похоже, после `pkill` macOS закэшировал permission в состоянии «вроде дали, но реально не дали». Re-toggle перевыдаёт реальное разрешение на низкоуровневый event tap. `accessibilityState()` при этом всё время врал.

**Итог:** Cmd+Shift+V теперь чистит буфер перед вставкой. Обычный Cmd+V продолжает работать как раньше. Если когда-нибудь снова отвалится – знаю, что первым делом проверять.

Финальный `~/.hammerspoon/init.lua`:

```lua
local function cleanText(s)
  if s == nil or s == "" then return s end
  s = s:gsub("^  ", "")           -- ведущие 2 пробела в самом начале
  s = s:gsub("\n  ", "\n")        -- ведущие 2 пробела после каждого \n
  s = s:gsub("[ \t]+\n", "\n")    -- висящие пробелы перед \n
  s = s:gsub("[ \t]+$", "")       -- висящие пробелы в самом конце
  return s
end

local tap = hs.eventtap.new({hs.eventtap.event.types.keyDown}, function(event)
  local flags = event:getFlags()
  -- keycode 9 = физическая клавиша V на US ANSI, не зависит от раскладки
  if flags.cmd and flags.shift and not flags.alt and not flags.ctrl
     and event:getKeyCode() == 9 then
    local raw = hs.pasteboard.getContents()
    if raw == nil or raw == "" then return true end

    hs.pasteboard.setContents(cleanText(raw))

    -- посылаем синтетический Cmd+V в фокусное приложение
    hs.timer.doAfter(0.02, function()
      hs.eventtap.event.newKeyEvent({"cmd"}, 9, true):post()
      hs.timer.usleep(20000)
      hs.eventtap.event.newKeyEvent({"cmd"}, 9, false):post()
    end)
    -- восстанавливаем оригинал буфера после вставки
    hs.timer.doAfter(0.6, function()
      hs.pasteboard.setContents(raw)
    end)

    return true  -- съедаем оригинальный Cmd+Shift+V, чтобы приложение его не видело
  end
  return false
end)
tap:start()

-- автоперезагрузка при изменении init.lua
hs.pathwatcher.new(os.getenv("HOME") .. "/.hammerspoon/", function(files)
  for _, f in ipairs(files) do
    if f:match("%.lua$") then hs.reload(); return end
  end
end):start()

hs.alert.show("Hammerspoon: Cmd+Shift+V для чистой вставки")
```
