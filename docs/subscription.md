---
title: Subskrypcja
date: 2022-10-01

---

# Subskrypcja

Aby prowadzić sprzedaż produktów online w modelu subskrypcyjnym trzeba posiadać jeden z następujących system płatności: **PayU, TPay lub Stripe.** 

## Sprzedaż subskrypcyjna
Aby włączyć model sprzedaży subskrypcyjnej należy przejść do **Ustawień strony -> Model pobierania płatności -> zaznaczyć opcję *Model subskrypcyjny*.**

![screen-sub](./images/screen-sub.png)


<br/>

## Plany subskrypcyjne

Aby ustawić pakiety subskrypcyjne należy przejść do **Ustawienia konta -> Model pobierania płatności -> *Model subskrypcyjny*: *Opcje*.**

![screen-sub-plany](./images/screen-sub-plany.png)

A następnie kliknąć przycisk **Dodaj**. 

I stworzyć swoje plany subskrypcyjne. Uzupełniamy następujące dane:

* **Nagłówek** - jest to tytuł planu, który będzie widoczny dla użytkownika
* **Produkty** - wybieramy produkty, do jakich chcemy, aby użytkownicy mieli dostęp w tym planie. Bo w ramach subskrypcji mogą mieć dostęp do wszystkich produktów, jakie są na platformie. Lub tylko do kilku wybranych. Jeśli zostanie wybrana opcja:

- **Wszystko** - to wówczas uczestnicy będą mieli dostęp do wszystkich produktów dostępnych na platformie. Z wyjątkiem produktów, które mają włączoną opcję **Sprzedaż poza subskrypcją**. Co to znaczy? Załóżmy, że na platformie masz 10 kursów wideo, które chcesz udostępniać w ramach subskrypcji. Ale masz też e-book, który (z jakiegoś powodu) nie chcesz, aby wchodził w pakiet subskrypcyjny. Włączenie przy nim opcji [Sprzedaż poza subskrypcją] (https://support.skyier.com/docs/subscription.html#sprzedaz-kursu-poza-subskrypcja) sprawi, że subskrybenci nie będą mieli do niego dostępu w ramach subskrypcji. 

- **Wybrano** - można też wybrać, do których produktów uczestnicy powinni mieć dostęp w ramach subskrypcji. Bo mogą mieć dostęp tylko do kilku wybranych. I jeśli zostanie wybrany produkt, przy którym jest włączona opcja **Sprzedaż poza subskrypcją**, to również wejdzie w skład tego planu. Inaczej mówiąc subskrybenci w tym wypadku będą mieli do niego dostęp. 

* **Studenci mogą przejść na ten plan** - ta funkcja zadziała w sytuacji, kiedy jest stworzonych kilka planów subskrypcyjnych. Np. plan Silver i plan Gold. Włączając tą opcję dajemy możliwość subskrybentom przechodzenia między planami w dowolnym momencie. 



Do dyspozycji mamy:

* **Trial** - o tym, jak działa trial znajdziesz informacje poniżej.
* **Miesięczny** - użytkownik wykupuje dostęp do platformy na miesiąc. I raz w miesiącu pobierana jest opłata z jego karty kredytowej.
* **Kwartalny** - użytkownik wykupuje dostęp do platformy na 3 miesiące. I raz na 3 miesiące pobierana jest opłata z jego karty kredytowej.
* **Półroczny** - użytkownik wykupuje dostęp na 6 miesięcy. I raz na 6 miesięcy pobierana jest opłata z jego karty kredytowej.
* **Roczny** - użytkownik wykupuje dostęp na 12 miesięcy. I raz na 12 miesięcy pobierana jest opłata z jego karty kredytowej.
* **Lifetime** - użytkownik wykupuje stały dostęp do platformy. Płaci raz i ma nieograniczony dostęp czasowy. 

Pod każdym planem można dodać opis. Opis, który będzie informował użytkownika co wchodzi w skład każdego planu. 

**Jak pokazać plany subskrypcyjne na swojej stronie?**

Aby wyświetlić oferowane plany subskrypcyjne na stronie głównej należy przejść do zakładki **Strony -> Strona główna, a następnie dodać sekcję Plany subskrypcyjne** W edytorze na podglądzie zobaczysz tzw. "podgląd uproszczony", ale już na stronie głównej podgląd rzeczywisty.


### Trial

Opcję trail włączamy, jeśli chcemy dać użytkownikowi możliwość przetestowania platformy za niższą cenę. W tym wypadku możemy ustawić ofertę, na przykład 7 dni za 7 zł. Oznacza to, że użytkownicy będą mieli dostęp do platformy na 7 dni i zostaną obciążoni kwotą 7 zł. Oczywiście można ustawić dowoloną ilość dni dostępu i dowoloną cenę. 

Co się dzieje po okresie trial?

Po okresie trail (czyli w tym wypadku po 7 dniach) użytkownicy automatycznie będą "przerzucani" na plan abonamentowy, który wybiorają przy dokonywaniu płatności. Na stronie zakupowej są informowani o tym, że kupują dostęp do platformy na 7 dni za 7 zł, a następnie zostaną obciążeni inną kwotą, w zależności od planu, który wybiorą. Jeśli w ciągu tych 7 dni anulują subskrypcję to nie zostaną obciążeni żadnymi dodatkowymi płatnościami. 

![screen-opcja-planow-2](./images/screen-opcja-planow-2.jpg)

<br>

## Dodatkowe informacje

### Strona zakupowa (checkout) 

Istnieje możliwość wstawienia dodatkowych informacji na stronie zakupowej. Informacje te będą widoczne pod planami subskrypcyjnymi. 

![screen-opcja-planow-3](./images/screen-opcja-planow-3.jpg)


Aby dodać te informacje należy wejść w Opcje planów, a następnie przejść do sekcji: Informacje dodatkowe na stronie /subscribe/checkout.

![screen-opcja-planow-4](./images/screen-opcja-planow-4.jpg)

### Strona z wyborem planu

Istnieje też możliwość wstawienia dodatkowych informacji na stronie z wyborem i opisem poszczególnych planów subskrypcyjnych.

![screen-opcja-planow-5](./images/screen-opcja-planow-5.jpg)


Aby dodać te informacje należy wejść w Opcje planów, a następnie przejść do sekcji: Informacje dodatkowe na stronie /subscribe.

![screen-opcja-planow-6](./images/screen-opcja-planow-6.jpg)

<br/>

## Sprzedaż kursu poza subskrypcją

Jest to funkcja umożliwiająca sprzedaż kursu online poza abonamentem subskrypcyjnym. Jeśli prowadzisz platformę subskrypcją, ale chcesz sprzedać kurs, który nie powinien być dostępny dla klientów subskrypcyjnych. To jest to opcja, która Ci to umożliwi. 

Aby włączyć tą opcję należy wejść w **Edycję kursu.** 

![screen-edycja-kursu](./images/screen-edycja-kursu.jpg)

A następnie przejść do **sekcji SZCZEGÓŁY** i zaznaczyć opcję *Produkt sprzedawany poza subskrypcją*. 

![screen-poza-subskrypcja](./images/screen-poza-subskrypcja.png)

## Sprzedaż subskrypcyjna i jednorazowa
Aby włączyć jednocześnie model sprzedaży subskrypcyjnej i jednorazowej należy przejść do **Ustawienia konta -> zaznaczyć jednocześnie opcje *Jednorazowe płatności i Model subskrypcyjny*.**

![screen-sub-poj](./images/screen-sub-poj.png)