# TypeScript: Typy podstawowe

## Cele lekcji

Na tej lekcji poznasz podstawowe typy danych w TypeScript: typy prymitywne, typy tablicowe, typy `unknown` i `any`, typy `void`, `null` i `undefined` oraz adnotacje typów. Typy pozwalają wykryć błędy już podczas pisania kodu, zanim program zostanie uruchomiony.

## Co będziesz umieć po tej lekcji?

- Zapisać adnotację typu dla zmiennej, parametru i wartości zwracanej przez funkcję.
- Rozróżnić typy `string`, `number` i `boolean`.
- Zapisać typ tablicowy jako `typ[]` lub `Array<typ>`.
- Zawęzić typ `unknown` za pomocą `typeof` przed użyciem wartości.
- Używać typów `void`, `null` i `undefined` zgodnie z ich znaczeniem.
- Rozpoznać, kiedy TypeScript sam wnioskuje typ zmiennej.

---

# Informacje

## Ogólne informacje

TypeScript to język programowania, który dodaje do JavaScriptu system typów. Typ określa, jaki rodzaj danych może przechowywać zmienna lub przyjmować funkcja.

Przykłady:

- string - tekst, np. imię ucznia
- number - liczba, np. ocena lub średnia
- boolean - wartość logiczna `true` lub `false`
- typ tablicowy - zbiór wartości jednego typu, np. lista ocen

## Typy prymitywne (primitive types)

string, number, boolean - podstawowe typy wartości tekstowych, liczbowych i logicznych.

```ts
// Adnotacja typu przy każdej zmiennej
const imieUcznia: string = "Ola";
const srednia: number = 4.5;
const aktywny: boolean = true;

console.log(imieUcznia, srednia, aktywny);
// Wynik:
// Ola 4.5 true
```

## Adnotacje typów (type annotations)

Adnotacja typu to jawny zapis typu w kodzie. Warto ją stosować przy parametrach funkcji.

```ts
// Adnotacje typów przy parametrach i wartości zwracanej
function opisUcznia(uczen: string, rocznik: number): string {
	return `${uczen}, rocznik ${rocznik}`;
}

console.log(opisUcznia("Anna", 2008));
// Wynik:
// Anna, rocznik 2008
```

## Typy tablicowe (array types)

Tablicę o elementach jednego typu zapisujemy jako `typ[]` albo `Array<typ>`.

```ts
// Dwa równoważne zapisy typu tablicowego
const przedmioty: string[] = ["matematyka", "fizyka"];
const ocenyPrzedmiotu: Array<string> = ["matematyka", "fizyka"];
const ocenyPrzedmiotu: Array<number> = [5, 4, 3];

console.log(przedmioty[0], ocenyPrzedmiotu.length);
// Wynik:
// matematyka 3
```

## Typy unknown i any

`unknown` przyjmuje dowolną wartość, ale przed użyciem trzeba zawęzić jej typ.
`any` wyłącza kontrolę typów.

```ts
// unknown wymaga sprawdzenia typu przed użyciem
function opisWartosc(wartosc: unknown): string {
	// typeof zawęża typ do number
	if (typeof wartosc === "number") {
		return "liczba: " + wartosc.toFixed(1);
	}
	return "inny typ: " + (typeof wartosc);
}

console.log(opisWartosc(4));
console.log(opisWartosc("pięć"));
// Wynik:
// liczba: 4.0
// inny typ: string
```

## Typy void, null i undefined

`void` oznacza brak zwracanej wartości. `null` i `undefined` to jawne oznaczenia braku wartości.

```ts
// Funkcja typu void nic nie zwraca, tylko wykonuje akcję
function zapiszOcene(ocena: number): void {
	console.log("Zapisano ocenę:", ocena);
}

// Typ z null oznacza brak wartości
let uwagi: string | null = null;
// Zmienna bez wartości ma typ undefined
let kara: undefined = undefined;

zapiszOcene(5);
console.log("Uwagi:", uwagi, "Kara:", kara);
// Wynik:
// Zapisano ocenę: 5
// Uwagi: null Kara: undefined
```

## Wnioskowanie typów (type inference)

Gdy nie podasz adnotacji, TypeScript sam ustala typ na podstawie wartości.
Na przykład `let wiek = 16;` otrzymuje typ `number`.

---

# Przykłady

## Dane ucznia - adnotacje i wnioskowanie

### Opis

Zobaczysz, kiedy typ trzeba podać ręcznie, a kiedy TypeScript wnioskuje go sam.

### Składnia

```ts
let zmienna = wartosc; // typ wnioskowany

// równoważne z adnotacją typu:
// let zmienna: number = wartosc;
```

### Przykład

```ts
// Adnotacje typów przy zmiennej i parametrach, wnioskowanie przy wieku
const imie: string = "Anna";
let wiek = 16; // TypeScript wnioskuje typ number
wiek = '16'; // błąd: Type 'string' is not assignable to type 'number'

function opisUcznia(uczen: string, rocznik: number): string {
	// Szablon tekstowy łączy string z liczbą
	return `${uczen}, rocznik ${rocznik}`;
}

console.log(opisUcznia(imie, 2008));
console.log("Wiek:", wiek);
// Wynik:
// Anna, rocznik 2008
// Wiek: 16
```

### Zadanie

Dodaj parametr `klasa: string` do funkcji `opisUcznia` i wypisz opis w formacie
"Anna, 2A, rocznik 2008".

---

# Zadania

## Zadanie 1: Rozgrzewka [ŁATWE]

Zadeklaruj zmienne z imieniem nauczyciela (string), liczbą lat pracy (number) i informacją
o etacie (boolean). Wypisz je w jednej linii.

Dane: "Piotr", 12, true

## Zadanie 2: Średnia ocen [ŚREDNIE]

Napisz funkcję `obliczSrednia`, która przyjmuje tablicę ocen i zwraca liczbę.
Wypisz średnią dla podanych ocen.

Dane: [4, 5, 3, 2]

Przykład wywołania i oczekiwany wynik:

```ts
function obliczSrednia(oceny: number[]): number {
	const suma = oceny.reduce((a, b) => a + b, 0);
	return suma / oceny.length;
}

console.log(obliczSrednia([4, 5, 3, 2]));
// Wynik:
// 3.5
```

## Zadanie 3: Opis elementów formularza [TRUDNE]

Napisz funkcję `opisElement(element: unknown): string`, która zwraca "liczba: X" dla number,
"tekst: X" dla string, "brak" dla null i "inny typ: NAZWA" dla pozostałych.
Wypisz opis każdego elementu z tablicy.

Dane: [16, "Piotr", null, true]

## Zadanie 4: Rozszerzenie funkcji [EXPERT]

Rozszerz `opisElement` o przypadek `undefined` (zwraca "nieznane") oraz tablice
(zwraca "lista: N elementów", gdzie N to długość tablicy), używając `Array.isArray`.

Dane: [undefined, [1, 2, 3], "Anna"]

---

# Podsumowanie

## Kluczowe wnioski

- Adnotacja typu zapisywana jest po dwukropku, np. `const wiek: number = 16;`.
- Typ tablicowy zapisujemy jako `typ[]` albo `Array<typ>`.
- `unknown` wymaga zawężenia typu przed użyciem, np. przez `typeof`.
- `void` oznacza brak zwracanej wartości, a `null` jawny brak wartości.

## Najczęstsze błędy

- Dodawanie tekstu do liczby, gdy zmienna ma typ number.
- Odwoływanie się do indeksu poza zakresem tablicy, co daje `undefined`.
- Używanie `any` zamiast `unknown`, przez co kontrola typów zostaje wyłączona.

## Dobre praktyki

- Podawaj adnotacje typów przy parametrach i wartościach zwracanych funkcji.
- Wybieraj `unknown` zamiast `any`, gdy typ danych nie jest znany.
- Formatuj kod skrótem Shift + Alt + F.

## Co dalej?

Sprawdź w dokumentacji TypeScript typy `never`, `object`, unie i krotki (tuple).
