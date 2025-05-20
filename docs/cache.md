---
title: Cache Przeglądarek
date: 2022-10-01
---

# Wyczyść cache **tylko dla jednej strony** (przez DevTools)

## 📌 Uwaga
Zanim zaczniesz, spróbuj **force refresh**:  
**Windows/Linux:** `Ctrl + F5`  
**macOS:** `Cmd + Shift + R`

## 🌐 Chrome / Edge / Brave
1. Otwórz stronę
2. `F12` lub `Ctrl + Shift + I` (DevTools)
3. Prawy klik na przycisku odświeżania 🔄 (obok adresu strony)
4. Wybierz: `Empty Cache and Hard Reload`

---

## 🦊 Firefox
1. `F12` → zakładka `Network`
2. Zaznacz: `Disable Cache` (tylko aktywne, gdy DevTools otwarte)
3. Odśwież stronę (`F5`)

> 🔥 Firefox NIE ma opcji „Wyczyść cache tylko dla tej strony” jak Chrome – trzeba iść przez `Storage`:

4. Zakładka `Storage` → `Clear Site Data`

---

## 🧭 Safari (macOS)
1. `Cmd + Option + E` (czyści cały cache)
   - Brak selektywnego czyszczenia jednej domeny
2. Alternatywa: `Develop` → `Empty Caches`
3. Lub `Safari` → `Ustawienia witryny` → usuwanie danych dla konkretnej strony (ręcznie)

---