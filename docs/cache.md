---
title: Cache Przeglądarek
date: 2022-10-01
---

# Jak radzić sobie z problemami z pamięcią podręczną przeglądarek?

## 🔄 Wymuszenie przeładowania strony
Na początek spróbuj **force refresh** – szybki sposób na załadowanie najnowszych plików:
- **macOS:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + F5`

## 🕵️‍♂️ Tryb incognito
Kolejny sposób to otwarcie strony w **trybie incognito** – przeglądarka nie używa wtedy starej pamięci podręcznej.
- **Chrome / Edge / Brave:** `Ctrl + Shift + N`
- **Firefox:** `Ctrl + Shift + P`
- **Safari:** `Cmd + Shift + N`

---

## 💻 Windows – Chrome / Edge / Brave
1. Otwórz stronę
2. `F12` lub `Ctrl + Shift + I` (DevTools)
3. Kliknij prawym przyciskiem myszy ikonę odświeżania 🔄
4. Wybierz: `Empty Cache and Hard Reload`

## 💻 Windows – Firefox
1. `F12` → zakładka **Network**
2. Zaznacz: `Disable Cache` (działa tylko gdy DevTools są otwarte)
3. Odśwież stronę (`F5`)
4. Zakładka **Storage** → `Clear Site Data` (dla danej strony)

> Firefox nie oferuje opcji `Empty Cache and Hard Reload` jak Chrome.

---

## 🍏 macOS – Chrome / Edge / Brave
1. Otwórz stronę
2. `Cmd + Option + I` (DevTools)
3. Prawy klik na ikonę odświeżania 🔄
4. Wybierz: `Empty Cache and Hard Reload`

## 🍏 macOS – Firefox
1. `Cmd + Option + I` → zakładka **Network**
2. Zaznacz: `Disable Cache`
3. Odśwież stronę (`Cmd + R`)
4. Zakładka **Storage** → `Clear Site Data`

## 🍏 macOS – Safari
1. `Cmd + Option + E` – czyści cały cache (nie tylko dla jednej strony)
2. Alternatywnie: `Develop` → `Empty Caches`
3. Lub:  
   `Safari` → `Ustawienia` → `Prywatność` → `Zarządzaj danymi witryn`  
   Wybierz stronę → `Usuń`

---