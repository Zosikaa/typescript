# TypeScript: Wstęp do TypeScript


## Cele lekcji

Na tej lekcji poznasz TypeScript i dowiesz się, czym różni się od JavaScript.
Zobaczysz, jakie narzędzia są potrzebne do pracy: Node.js, npm i kompilator tsc.
Nauczysz się opisywać dane szkoły (uczeń, klasa, sala, ocena) za pomocą typów.
Typy pozwalają wykryć błąd, zanim program zacznie działać. To oszczędza czas
przy większych projektach.


## Co będziesz umieć po tej lekcji?

Po tej lekcji będziesz umieć:

- wyjaśnić, czym jest TypeScript i czym różni się od JavaScript,
- opisać rolę Node.js, npm, kompilatora tsc oraz pliku tsconfig.json,
- zainstalować Node.js, npm i TypeScript oraz sprawdzić ich wersje w terminalu,
- napisać plik .ts z adnotacjami typów zmiennych i funkcji,
- skompilować plik .ts do .js poleceniem tsc i uruchomić wynik,
- dobrać typy danych do opisu ucznia, klasy, sali i lekcji.


---


# Informacje

## Ogólne informacje

W szkole jest wiele danych: uczniowie, nauczyciele, klasy, sale, oceny i plan lekcji.
Każda dana ma swój typ. Numer w dzienniku to liczba, imię to tekst, a obecność to
wartość tak lub nie. TypeScript pozwala zapisać te typy wprost w kodzie i pilnuje,
czy są używane poprawnie.

Na tej lekcji zainstalujesz Node.js, npm i TypeScript, a potem napiszesz pierwszy
plik .ts.

## TypeScript

TypeScript - TypeScript to nadzbiór JavaScriptu, czyli jego rozszerzenie, które
dodaje opcjonalny, statyczny system typów. Typy sprawdzane są przed uruchomieniem
programu, więc błędy wykrywasz wcześniej. Pomaga to szczególnie w większych projektach.

Analogia: etykieta na słoiku mówi, co jest w środku, zanim go otworzysz.

## Różnica między JavaScript a TypeScript

Różnica między JavaScript a TypeScript (JavaScript vs TypeScript) - JavaScript sprawdza
typy podczas działania programu, a TypeScript robi to wcześniej, przy kompilacji.
Błędny typ danych zgłaszasz więc przed uruchomieniem, a nie w trakcie pracy programu.

Analogia: kontrola biletu przed wejściem do pociągu zamiast kontroli w połowie trasy.

## Node.js i npm

Node.js i npm (Node.js and npm) - Node.js uruchamia JavaScript poza przeglądarką,
a npm instaluje biblioteki i narzędzia. Bez Node.js nie uruchomisz tsc, a npm służy
do jego instalacji. Wersje sprawdzisz poleceniami `node -v` i `npm -v`.

Analogia: Node.js to silnik samochodu, a npm to sklep, z którego kupujesz części.

## Kompilator tsc

### Informacje ogólne

Kompilator tsc (TypeScript compiler) - tsc to kompilator TypeScript. Instalujesz go
poleceniem `npm install -g typescript`. Sprawdza on typy i tworzy pliki .js. Node.js
nie rozumie adnotacji typów, więc kod z typami najpierw kompilujesz. Wersję tsc
sprawdzisz poleceniem `tsc -v`.

Analogia: tłumacz, który przekłada tekst z adnotacjami na zwykły JavaScript.

## Plik konfiguracyjny tsconfig.json

Plik `tsconfig.json` zawiera ustawienia kompilatora TypeScript. Możesz w nim określić wersję JavaScript na wyjściu, katalogi źródłowe i wyjściowe, a także opcje ścisłości typów. Dzięki temu nie musisz podawać wszystkich opcji przy każdym wywołaniu `tsc`.

Analogia: karta ustawień projektu, którą kompilator czyta przed każdą pracą.

Przykładowa zawartość pliku `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

Utworzenie pliku `tsconfig.json` w katalogu projektu pozwala na centralne zarządzanie ustawieniami kompilatora. Możesz to zrobić poleceniem:

```bash
tsc --init
```

## Plik .ts i kompilacja do .js

Plik .ts i kompilacja do .js (TypeScript source file) - plik .ts zawiera kod z typami.
Polecenie `tsc nazwa.ts` tworzy obok niego plik `nazwa.js`. Uruchamiasz plik .js,
a nie źródło .ts, dzięki czemu widzisz, co faktycznie dostaje Node.js.

Analogia: projekt napisany po ludzku (.ts) przetłumaczony na wersję zrozumiałą dla
Node.js (.js).

Kompilacja pliku .ts do .js odbywa się poleceniem `tsc nazwa.ts`. Możesz też użyć opcji `--strict` i `--target`, aby wymusić ścisłe sprawdzanie typów i określić wersję JavaScript na wyjściu:

Przełączniki:
- `--strict` włącza ścisłe sprawdzanie typów.
- `--target` określa wersję JavaScript, na którą ma być skompilowany kod TypeScript.

```bash
tsc --strict --target ES2022 01p-ts-wstep.ts
```

---


# Przydatne funkcje / składnia / itd

## Adnotacja typu zmiennej

### Opis

Dwukropek po nazwie zmiennej podaje jej typ, a TypeScript pilnuje, aby przypisana wartość do tego typu pasowała.

### Składnia

`let nazwa: typ = wartosc;`

### Przykład

```ts
// Nazwa klasy jako tekst, typ string
let nazwaKlasy: string = "3A";
// Liczba uczniow w klasie, typ number
let liczbaUczniow: number = 28;
console.log(`Klasa ${nazwaKlasy} ma ${liczbaUczniow} uczniow`);
// Wynik:
// Klasa 3A ma 28 uczniow
```

### Zadanie

Zadeklaruj zmienną z typem number i przypisz jej tekst, a następnie sprawdź, co zgłasza kompilator.

## Plik .ts i kompilacja tsc

### Opis

Funkcja z typami parametrów i typem zwracanej wartości zapisana w pliku .ts, który polecenie tsc zamienia na JavaScript.

### Składnia

`function nazwa(parametr: typ): typZwracany { }`

### Przykład

```ts
// Funkcja z typami parametrow i typem zwracanej wartosci (string)
function opiszLekcje(przedmiot: string, sala: string, numerLekcji: number): string {
  // Skladamy tekst z podanych danych
  return `Lekcja ${numerLekcji}: ${przedmiot}, sala ${sala}`;
}
// Wywolanie funkcji i wypisanie wyniku na konsoli
console.log(opiszLekcje("Fizyka", "105", 2));
// Wynik:
// Lekcja 2: Fizyka, sala 105
```

### Zadanie

Zapisz ten kod jako lekcja.ts, uruchom tsc lekcja.ts i sprawdź, czy obok pojawił się plik lekcja.js.


---


# Przykłady

## Dane ucznia z adnotacjami typów

### Opis

Zobaczyć, jak adnotacja typu opisuje dane ucznia i że TypeScript zgłasza nazwę, której nie ma w kodzie.

### Przykład

```ts
// Dane ucznia: imie, numer w dzienniku i informacja o obecnosci
let imieUcznia: string = "Anna";
let numerDziennika: number = 12;
let czyObecny: boolean = true;
console.log(`Uczen: ${imieUcznia}, nr w dzienniku: ${numerDziennika}`);
console.log(`Obecny: ${czyObecny}`);
// Wynik:
// Uczen: Anna, nr w dzienniku: 12
// Obecny: true
```

### Zadanie

Zmień wartość numerDziennika na tekst "12" i sprawdź, co zgłasza kompilator.

## Funkcja wystawiająca ocenę

### Opis

Zobaczyć, że funkcja z typem zwracanym string musi zwrócić tekst, a kompilator sprawdza to przed uruchomieniem.

### Przykład

```ts
// Funkcja zwraca tekst z wpisem oceny: typ zwracany to string
function wystawOcene(imie: string, ocena: number): string {
  // Zlozenie komunikatu z imienia ucznia i oceny
  return `Wpisano ocene ${ocena} dla ucznia ${imie}`;
}
// Wywolanie funkcji dla ucznia Jan z ocena 5
console.log(wystawOcene("Jan", 5));
// Wynik:
// Wpisano ocene 5 dla ucznia Jan
```

### Zadanie

Zmień typ parametru ocena na string i sprawdź, co zgłasza kompilator w wywołaniu funkcji.


---


# Zadania

## Zadanie 1: rozgrzewka [ŁATWE]

Zadeklaruj trzy zmienne z adnotacjami typów dla sali: nazwa sali, liczba miejsc i czy jest rzutnik. Wypisz jedno zdanie z tymi danymi.

Dane: nazwa Sala B12, liczba miejsc 30, rzutnik tak

## Zadanie 2: praktyka [ŚREDNIE]

Napisz funkcję obliczWolneMiejsca z dwoma parametrami liczbowymi i typem zwracanej wartości. Wywołaj ją dla sali i wypisz wynik na konsoli.

Dane: pojemność sali 32 miejsca, w sali 27 uczniów

## Zadanie 3: wyzwanie [TRUDNE]

Napisz funkcję podsumujLekcje, która dla przedmiotu, sali, pojemności i liczby uczniów zwraca komunikat "Brak miejsc", gdy uczniów jest więcej niż miejsc, a w przeciwnym razie liczbę wolnych miejsc. Wywołaj ją dwa razy dla danych z pola dane i wypisz oba wyniki.

Dane: Fizyka, sala A204, pojemność 20, uczniów 23; Historia, sala C01, pojemność 30, uczniów 18

## Zadanie 4: rozszerzenie [EXPERT]

Rozszerz funkcję podsumujLekcje o pierwszy parametr numerLekcji typu number. Komunikat ma zaczynać się od tekstu "Lekcja N: " i obejmować oba wywołania z Zadania 3 z numerami lekcji 3 i 4.


---


# Podsumowanie

## Kluczowe wnioski

- TypeScript dodaje do JavaScript statyczne typy, które sprawdzasz przed uruchomieniem.
- Node.js uruchamia JavaScript poza przeglądarką, npm instaluje narzędzia, a tsc
  zamienia plik .ts na plik .js.
- Uruchamiasz plik .js wynikowy, a nie źródło .ts.
- Wspólne ustawienia kompilatora zapisujesz w pliku tsconfig.json.

## Najczęstsze błędy i pułapki

- Mylenie adnotacji typu z przypisaniem wartości: adnotacja opisuje typ zmiennej,
  a przypisanie wstawia konkretną wartość.
- Brak instrukcji return w funkcji z typem zwracanym: funkcja nic nie zwraca,
  więc wynik jest undefined.
- Uruchamianie pliku .ts zamiast skompilowanego pliku .js.
- Brak Node.js lub tsc w systemie.

## Dobre praktyki

- Nazywaj zmienne po polsku, bez znaków diakrytycznych.
- Dodawaj typy do parametrów i wartości zwracanej funkcji.
- Kompiluj tsc po każdej zmianie.
- Sprawdzaj wersje poleceniami `node -v`, `npm -v` i `tsc -v`.
- Wspólne ustawienia trzymaj w tsconfig.json.
