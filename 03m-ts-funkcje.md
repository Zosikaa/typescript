# TypeScript: Funkcje w TypeScript

## Cele lekcji

Na tej lekcji poznasz sposoby typowania funkcji w TypeScript. Nauczysz się opisywać typy
parametrów i wartości zwracanej, tworzyć parametry opcjonalne i domyślne, pisać funkcje
strzałkowe z typami oraz definiować typy funkcji. Typowanie funkcji pozwala wykryć błędy
już na etapie pisania kodu, zanim program zostanie uruchomiony.

## Co będziesz umieć po tej lekcji?

- Określać typy parametrów i wartości zwracanej funkcji.
- Tworzyć parametry opcjonalne oraz domyślne.
- Pisać funkcje strzałkowe z typami.
- Definiować i stosować typy funkcji.

---

# Informacje

## Ogólne informacje

TypeScript jest nadzbiorem JavaScriptu, który dodaje do języka system typów. Funkcje są
jednym z najważniejszych elementów programu, dlatego ich typowanie pozwala jasno określić,
jakie dane przyjmują i jakie zwracają. Kompilator sprawdza zgodność typów podczas wywołań,
więc łatwiej uniknąć pomyłek.

Przykłady:

- Typ parametru - określenie, jakiego typu wartość może zostać przekazana do funkcji.
- Typ wartości zwracanej - określenie, jakiego typu wartość zwraca funkcja.
- Parametr opcjonalny (optional parameter) - parametr, który nie musi zostać podany.
- Parametr domyślny (default parameter) - parametr z wartością używaną, gdy brak argumentu.

## Typ funkcji (function type)

Typ funkcji opisuje kształt funkcji: typy jej parametrów oraz typ wartości zwracanej.
Dzięki temu można przypisać funkcję do zmiennej o określonym typie i być pewnym,
że będzie ona miała właściwą postać.

---

# Przydatne funkcje / składnia / itd

## Typy parametrów i wartości zwracanej

### Opis

Po nazwie każdego parametru dodaje się dwukropek i typ. Typ wartości zwracanej podaje się
po nawiasach z parametrami, również po dwukropku. Gdy funkcja nic nie zwraca, używa się
typu `void`.

### Składnia

```ts
function nazwa(parametr: typ): typWartosciZwracanej {
	// ciało funkcji
}
```

### Przykład

```ts
// Funkcja dodająca dwie liczby - parametry i wynik mają typ number
function dodaj(a: number, b: number): number {
	return a + b;
}

// Funkcja, która nic nie zwraca - typ wyniku to void
function wypiszWynik(wynik: number): void {
	console.log(`Wynik: ${wynik}`);
}

console.log(dodaj(2, 3)); // Wynik: 5
wypiszWynik(dodaj(10, 5)); // Wynik: 15
```

Oczekiwany wynik:

```
5
Wynik: 15
```

### Zadanie

Napisz funkcję `pole`, która przyjmuje długość boku kwadratu typu `number` i zwraca jego pole
typu `number`. Wywołaj funkcję dla boku o długości 6 i wypisz wynik w konsoli.

## Parametry opcjonalne i domyślne

### Opis

Parametr opcjonalny oznacza się znakiem `?` po jego nazwie. Gdy argument nie zostanie podany,
wartość parametru wynosi `undefined`. Parametr domyślny otrzymuje wartość przypisaną
po znaku `=`, która jest używana, gdy argument nie zostanie przekazany.

### Składnia

```ts
function nazwa(parametr?: typ): typWartosciZwracanej {
	// ciało funkcji
}

function nazwa(parametr: typ = wartoscDomyslna): typWartosciZwracanej {
	// ciało funkcji
}
```

### Przykład

```ts
// Parametr imie jest opcjonalny - znak ? po nazwie
function powitanie(imie?: string): string {
	// Jeśli nie podano imienia, wartość parametru to undefined
	if (imie === undefined) {
		return "Witaj, nieznajomy!";
	}
	return `Witaj, ${imie}!`;
}

// Parametr wiadomosc ma wartość domyślną "Cześć"
function pozdrowienie(imie: string, wiadomosc: string = "Cześć"): string {
	return `${wiadomosc}, ${imie}!`;
}

console.log(powitanie()); // Wynik: Witaj, nieznajomy!
console.log(powitanie("Anna")); // Wynik: Witaj, Anna!
console.log(pozdrowienie("Jan")); // Wynik: Cześć, Jan!
console.log(pozdrowienie("Jan", "Hej")); // Wynik: Hej, Jan!
```

Oczekiwany wynik:

```
Witaj, nieznajomy!
Witaj, Anna!
Cześć, Jan!
Hej, Jan!
```

### Zadanie

Napisz funkcję `opis`, która przyjmuje nazwę produktu typu `string` oraz opcjonalną cenę
typu `number`. Jeśli cena zostanie podana, funkcja ma zwrócić tekst w formie
`Nazwa: cena zł`, a w przeciwnym razie `Nazwa: brak ceny`. Wywołaj funkcję dwa razy:
z ceną i bez niej.

## Funkcje strzałkowe z typami

### Opis

Funkcja strzałkowa (arrow function) to zwięzły zapis funkcji. Typy parametrów i wartości
zwracanej podaje się tak samo jak w zwykłej funkcji, a typ wyniku umieszcza się przed
symbolem `=>`.

### Składnia

```ts
const nazwa = (parametr: typ): typWartosciZwracanej => {
	// ciało funkcji
};

const nazwa = (parametr: typ): typWartosciZwracanej => wyrazenie;
```

### Przykład

```ts
// Funkcja strzałkowa z typami parametru i wyniku
const pole = (bok: number): number => bok * bok;

// Funkcja strzałkowa z blokiem kodu
const suma = (a: number, b: number): number => {
	const wynik = a + b;
	return wynik;
};

console.log(pole(4)); // Wynik: 16
console.log(suma(7, 8)); // Wynik: 15
```

Oczekiwany wynik:

```
16
15
```

### Zadanie

Napisz funkcję strzałkową `czyParzysta`, która przyjmuje liczbę typu `number` i zwraca
wartość typu `boolean` informującą, czy liczba jest parzysta. Wywołaj ją dla liczb 4 i 7
i wypisz wyniki w konsoli.

## Typy funkcji

### Opis

Typ funkcji definiuje się za pomocą słowa kluczowego `type`. Zapis `(parametry) => typ`
opisuje parametry i typ wyniku. Dzięki temu można przypisać funkcję o pasującym kształcie
do zmiennej tego typu.

### Składnia

```ts
type NazwaTypu = (parametr: typ) => typWartosciZwracanej;
```

### Przykład

```ts
// Typ funkcji: przyjmuje dwie liczby i zwraca liczbę
type Dzialanie = (x: number, y: number) => number;

// Zmienne tego typu mogą przechowywać funkcje o pasującym kształcie
const mnozenie: Dzialanie = (x, y) => x * y;
const odejmowanie: Dzialanie = (x, y) => x - y;

console.log(mnozenie(3, 4)); // Wynik: 12
console.log(odejmowanie(10, 3)); // Wynik: 7
```

Oczekiwany wynik:

```
12
7
```

### Zadanie

Zdefiniuj typ `Porownanie` opisujący funkcję przyjmującą dwie liczby typu `number`
i zwracającą `boolean`. Utwórz zmienną `czyWieksza` tego typu, która sprawdza, czy pierwsza
liczba jest większa od drugiej. Wywołaj ją dla liczb 9 i 5.

---

# Przykłady

## Cena produktu z rabatem

### Opis

Przykład łączy parametry domyślne z typami wartości zwracanej. Funkcja liczy cenę po rabacie,
a jeśli rabat nie zostanie podany, przyjmuje wartość 10 procent.

### Składnia

```ts
function nazwa(cena: number, rabat: number = 10): number {
	// ciało funkcji
}
```

### Przykład

```ts
// Cena po rabacie - rabat domyślnie wynosi 10 procent
function cenaPoRabacie(cena: number, rabat: number = 10): number {
	return cena - (cena * rabat) / 100;
}

// Funkcja strzałkowa formatująca cenę do dwóch miejsc po przecinku
const formatujCene = (kwota: number): string => `Cena: ${kwota.toFixed(2)} zł`;

console.log(formatujCene(cenaPoRabacie(200))); // Wynik: Cena: 180.00 zł
console.log(formatujCene(cenaPoRabacie(200, 25))); // Wynik: Cena: 150.00 zł
```

Oczekiwany wynik:

```
Cena: 180.00 zł
Cena: 150.00 zł
```

### Zadanie

Dopisz do przykładu funkcję strzałkową `czyTani`, która przyjmuje kwotę typu `number`
i zwraca `true`, gdy kwota jest mniejsza niż 100. Wywołaj ją dla wyniku funkcji
`cenaPoRabacie` z rabatem 50 procent dla ceny 150.

---

# Zadania

## Zadanie 1: Typy parametrów i wartości zwracanej [ŁATWE]

Napisz funkcję `pomnoz`, która przyjmuje dwie liczby typu `number` i zwraca ich iloczyn.
Wywołaj funkcję dla liczb 6 i 7 i wypisz wynik w konsoli.

## Zadanie 2: Parametry opcjonalne i domyślne [ŚREDNIE]

Napisz funkcję `przywitaj`, która przyjmuje imię typu `string` oraz opcjonalny tytuł typu
`string` z wartością domyślną `"Pan"`. Funkcja ma zwracać tekst w formie `Tytuł Imię`.
Wywołaj funkcję bez tytułu oraz z tytułem `"Pani"`.

## Zadanie 3: Funkcje strzałkowe i typy funkcji [TRUDNE]

Zdefiniuj typ `Przeksztalcenie` opisujący funkcję przyjmującą `number` i zwracającą `number`.
Napisz funkcję strzałkową `zastosuj`, która przyjmuje liczbę oraz funkcję typu
`Przeksztalcenie` i zwraca wynik zastosowania tej funkcji do liczby. Użyj jej do podwojenia
liczby 5 oraz do podniesienia liczby 3 do kwadratu.

## Zadanie 4: Złożone typowanie funkcji [EXPERT]

Napisz funkcję `sredniaOcen`, która przyjmuje tablicę ocen typu `number[]` oraz opcjonalny
parametr typu `boolean` z wartością domyślną `false`. Gdy parametr ma wartość `true`, funkcja
zwraca zaokrągloną średnią do liczby całkowitej, a w przeciwnym razie średnią z dokładnością
do dwóch miejsc po przecinku (użyj `toFixed(2)`). Wywołaj funkcję dla tablicy `[4, 5, 3, 5]`
w obu wariantach.

---

# Podsumowanie

## Kluczowe wnioski

- Typy parametrów i wartości zwracanej zapisuje się po dwukropku.
- Znak `?` oznacza parametr opcjonalny, a `=` ustawia wartość domyślną.
- Funkcje strzałkowe mogą mieć pełne typowanie tak samo jak zwykłe funkcje.
- Typ funkcji pozwala opisać kształt funkcji i przypisywać ją do zmiennych.

## Najczęstsze błędy

- Podanie parametru opcjonalnego przed parametrami wymaganymi.
- Zwracanie wartości z funkcji typowanej jako `void`.
- Przekazanie argumentu o niezgodnym typie, np. tekstu zamiast liczby.
- Zapomnienie o typie wartości zwracanej w funkcji strzałkowej.

## Dobre praktyki

- Zawsze podawaj typy parametrów, aby kompilator mógł sprawdzać poprawność wywołań.
- Używaj typów funkcji przy przekazywaniu funkcji jako argumentów.
- Zwracaj uwagę na to, co edytor VS Code podkreśla na czerwono.

## Co dalej?

Sprawdź, jak typować funkcje z parametrami resztowymi (rest parameters) oraz jak tworzyć przeciążenia
funkcji (function overloads). Rozwiąż zadania z tej lekcji samodzielnie, a następnie
przetestuj je dla różnych danych wejściowych.
