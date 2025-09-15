---
title: Integracje - systemy płatności
date: 2022-10-01

---

# Integracje z systemami płatności

## Przelewy24

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. Tryb testowy działa po aktywacji konta Sandbox w systemie Przelewy24. I dla trybu testowego obowiązuje inny klucz CRC niż dla środowiska produkcyjnego. Pamiętaj o tym, w momencie przeprowadzania płatności testowych. 

**Gdzie znaleźć ID Sprzedawcy, ID Sklepu, Klucz CRC?**

**ID Sprzedawcy** - identyfikator Twojego konta w systemie Przelewy24, który został nadany przy rejestracji w serwisie. Inaczej mówiąc, jest to numer, którym logujesz się do Przelewy24.

**ID Sklepu** - identyfikator Twojego konta w systemie Przelewy24, który został nadany przy rejestracji w serwisie. Inaczej mówiąc, jest to numer, którym logujesz się do Przelewy24. I jest on identyczny jak w przypadku ID Sprzedawcy.

**Klucz CRC** - klucz możesz pobrać w zakładce Moje dane -> Ustawienia -> Dane API i konfiguracja.

<br>

## Dotpay

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć ID Sklepu i PIN?**

Wybierz Ustawienia -> Powiadomienia -> Konfiguracja urlc

**Numer ID Sklepu** to 6-cyfrowy numer znajdujący się przed "hasztagiem".

**PIN** to ciąg znaków przypisany do danego Sklepu.

![screen-dotpay-1](./images/screen-dotpay-1.jpg)

**Dodatkowo trzeba pamiętać o ustawieniu statusu NIE w kolumnie Blokuj zewnętrzne urlc. Aby to zmienić należy wejść w Edycję sklepu i odznaczyć pole Blokuj zewnętrzne urlc.**

![screen-dotpay-2](./images/screen-dotpay-2.jpg)

<br>

## PayU

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy masz w PayU wybraną wersję testową i chcesz przeprowadzić płatność testową. 

**Jak dodać sklep i gdzie znaleźć Pos id, MD5, Client id, Client secret?**

Wybierz Moje sklepy -> Dodaj sklep

![screen-payu-4](./images/screen-payu-4.jpg)

**Wypełnij 1 krok formularza.** Podając obowiązkowo:

- Adres strony 
- Nazwę sklepu - ta nazwa będzie widoczna na wydruku przelewu

![screen-payu-7](./images/screen-payu-7.jpg)

W przypadku adresu strony (jeśli nie masz go jeszcze dodanego) wybierz opcję inny adres, a następnie wypełnij formularz, który się pojawił.

W polu **Inny adres www** wybierz: https:// i podaj adres url swojej platformy. Przykład: https://inspiracje.skyier.pl

Uzupełnij inne obowiązkowe pola.

![screen-payu-8](./images/screen-payu-8.jpg)

**Przejdź do kroku drugiego kroku**

- wybierz Typ punktu płatności: REST API (checkout)
- podaj Nazwę punktu płatności

![screen-payu-5](./images/screen-payu-5.jpg)

Kliknij przycisk **Dodaj sklep**. Pojawią Ci się dane, które należy wpisać w Skyier.

![screen-payu-6](./images/screen-payu-6.jpg)



**Gdzie znaleźć Pos id, MD5, Client id, Client secret? - kiedy masz już dodany sklep**

Wybierz Płatności elektroniczne -> Moje sklepy -> Punkty płatności wybranego sklepu

![screen-payu-1](./images/screen-payu-1.jpg)

Wybierz ponownie Punkt płatności i przejdź do szczegółówych informacji, na jego temat.

![screen-payu-3](./images/screen-payu-3.jpg)


<br>

## PayPal

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć Secret i Client ID?**

Wejdź na stronę https://developer.paypal.com/home i zaloguj się do panelu

Wybierz Dashboard -> My Apps & Credentials -> Live -> Create App

![screen-paypal-1](./images/screen-paypal-1.jpg)

Podaj nazwę App, aby wiedzieć, w jakim celu została utworzona -> Create App

![screen-paypal-2](./images/screen-paypal-2.jpg)

<br>

## TPay

#### Jeśli prowadzisz sprzedaż wyłącznie pojedynczych produktów (kursów online, pakietów, konsultacji) to wypełnij pola: ID Sprzedawcy, Kod bezpieczeństwa, Klucz API i Hasło API.

**Gdzie znaleźć ID Sprzedawcy i Kod bezpieczeństwa?**

**ID Sprzedawcy** to identyfikator Twojego konta w systemi TPay. Inaczej mówiąc jest to numer, którym logujesz się do panelu TPay.

![screen-tpay-1](./images/screen-tpay-1.jpg)

**Kod bezpieczeństwa znajdziesz:** Menu -> Ustawienia -> Powiadomienia -> Zabezpieczenia.

![screen-tpay-2](./images/screen-tpay-2.png)

**Klucz API i Hasło API znajdziesz:** Menu -> Integracja -> API.

Kliknij przycisk DODAJ NOWY KLUCZ 

![screen-tpay-3](./images/screen-tpay-3.png)

A następnie utwórz hasło, aktywuj go i wybierz rodzaj uprawnienia. Po dodaniu klucza automatycznie zostanie wygenerowany klucz, który trzeba podać w integracji w Skyier.

![screen-tpay-4](./images/screen-tpay-4.png)


#### Jeśli prowadzisz sprzedaż subskrypcyjną kursów to dodatkowo wypełnij pola: Klucz API, Kod weryfikacyjny, Hasło API, Klucz publiczny RSA, Algorytm podpisu.

**Gdzie znaleźć te informacje?**

Wejdź w Menu -> Płatności kartami -> API

![screen-tpay-karta](./images/screen-tpay-karta.png)

Przy pierwszej konfiguracji tej strony trzeba wygenerować Kod weryfikacyjny i ustawić Hasło API.

W przypadku:

**- Adresu url powiadomień - podaj: https://nazwadomeny.pl/api/tpay/subscription/notify**

**- Adres url powrotny (powodzenia i błąd) - podaj nazwę strony, czyli: https://nazwadomeny.pl**


<br>

## Stripe

**Gdzie znaleźć Publishable Api Key, Secret Api Key i Webhook Singing Secret?**

Publishable Api Key i Secret Api Key znajdziesz: Developers -> API keys -> Standard keys

![screen-stripe-0](./images/screen-stripe-0.jpg)

Aby poznać Secret key kliknij *Reveal live key*

![screen-stripe-1](./images/screen-stripe-1.jpg)

Aby ustawić Webhook Singing Secret należy najpierw ustawić Endpoint. Aby to zrobić przejdź do: Developers -> Webhooks -> Add endpoint.

![screen-stripe-2](./images/screen-stripe-2.jpg)

Następnie w polu

**- Url endpoint** podaj adres url, który ma taką strukturę: nazwadomeny.pl/api/stripe/notifications

**- w Events to send wybierz:** receive all events

**Kliknij Update endpoint**

![screen-stripe-3](./images/screen-stripe-3.jpg)

**Webhook Singing Secret znajdziesz:** Developers -> Webhooks -> wybrany Endpoints (kliknij adres url, który stworzyłeś we wcześniejszym kroku) -> Signing Secret.

Aby poznać Webhook Signing Secret kliknij *Reveal live key*

![screen-stripe-4](./images/screen-stripe-4.jpg)

Sprawdź, czy Webhook ma status: **active**.

![screen-stripe-5](./images/screen-stripe-5.jpg)

<br>

## Paynow

Jeśli nie masz aktywowanej na swoim koncie bankowym platności Paynow to w pierwszym kroku złóż wniosek. 

**Aby to zrobić, zaloguj się w mbanku na swoje konto biznesowe, a następnie wybierz: Mój Biznes -> Paynow -> Aktywuj.**

Dopiero po aktywacji będziesz mógł przejść do wprowadzenia poniższych ustawień.


Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć Klucz API i Signature Key?**

Wybierz Mój Biznes -> Ustawienia -> Sprzedaż -> Sklepy i punkty płatności

![screen-paynow-1](./images/screen-paynow-1.png)

Kliknij Dodaj sklep

![screen-paynow-2](./images/screen-paynow-2.png)


I podaj następujące dane:

* **domena sklepu** - url Twojej platformy z kursami online, np. https://inspiracje.skyier.pl
* **kategoria sklepu** - wybierz kategorią, która najlepiej odpowiada tematyce Twojej platformy
* **platforma sklepowa** - wybierz: Własna platforma

Dodaj sklep

Ustaw:

* **adres powiadomień** - ma on strukturę: https://twojadomena/api/paynow/notify

* **adres powrotu** - ma on strukturę: https://twojadomena/transaction/pending

![screen-paynow-3](./images/screen-paynow-3.png)


A następnie skopiuj i podaj w Skyier:

* **Klucz dostępu do API** -> Klucz API

* **Klucz obliczania podpisu** -> Signature Key

![screen-paynow-4](./images/screen-paynow-4.png)

<br>

## Imoje

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Jak dodać sklep i gdzie znaleźć Identyfikator klienta, Identyfikator sklepu, Klucz sklepu?**

Wybierz Sklepy -> Dodaj sklep

![screen-imoje-dodaj-sklep](./images/screen-imoje-dodaj-sklep.png)

Wypełnij formularz. **Podając obowiązkowo:**

* Nazwę sklepu
* Adres url platformy

![screen-imoje-dodawanie-danych-sklepu](./images/screen-imoje-dodawanie-danych-sklepu.png)

Sklep pojawi się na liście Twoich sklepów. Kliknij w niego, a następnie wybierz opcję **Szczegóły**.

![screen-imoje-szczegoly](./images/screen-imoje-szczegoly.png)

Przejdź do zakładki **Dane do integracji**

![screen-imoje-dane-integracji](./images/screen-imoje-dane-integracji.png)

Skopiuj i wklej do integracji w Skyier nastepujące dane: 
* Identyfikator klienta
* Identyfikator sklepu
* Klucz sklepu

Ostatnim krokiem jest ustawienie adresu notyfikacji. Aby to zrobić kliknij Edytuj w polu Adres notyfikacji. 

![screen-imoje-notyfikacja](./images/screen-imoje-notyfikacja.png)

I wpisz adres o strukturze: https://nazwa-platfomy.pl/api/imoje/notify

![screen-imoje-adres-notyfikacji](./images/screen-imoje-adres-notyfikacji.png)







