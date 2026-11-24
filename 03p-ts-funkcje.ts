// TypeScript: Funkcje w TypeScript
/* Uruchomienie:
npx tsx sciezka/do/pliku.ts
*/

export {};


// #########################################################################
// Typy parametrow i wartosci zwracanej
// #########################################################################

/**
 * description: Dodaje dwie liczby i zwraca ich sume.
 * architectural-note: Chroni przed przekazaniem tekstu zamiast liczby, ktory
 * dalby bledny wynik zamiast dodawania.
 * inf04-relevance: Jawne typowanie parametrow i wyniku to podstawa bezpiecznego
 * kodu wymaganego w egzaminie INF.04.
 */
function dodaj(a: number, b: number): number {
	return a + b;
}

/**
 * description: Wypisuje wynik w konsoli. Nic nie zwraca, wiec typ wyniku to void.
 * architectural-note: Chroni przed nieoczekiwanym zwracaniem wartosci z funkcji
 * przeznaczonej tylko do wyswietlania.
 * inf04-relevance: Rozroznienie funkcji zwracajacych wartosc i funkcji typu void
 * pojawia sie w zadaniach dotyczacych poprawnosci programow.
 */
function wypiszWynik(wynik: number): void {
	console.log(`Wynik: ${wynik}`);
}

console.log(dodaj(2, 3)); // Wynik: 5
wypiszWynik(dodaj(10, 5)); // Wynik: 15

// Oczekiwany wynik:
// 5
// Wynik: 15


// #########################################################################
// Parametry opcjonalne i domyslne
// #########################################################################

/**
 * description: Zwraca powitanie. Parametr imie jest opcjonalny, gdy go brak,
 * uzywany jest tekst dla nieznajomego.
 * architectural-note: Chroni przed odwolaniem sie do wartosci undefined w tekscie
 * powitania.
 * inf04-relevance: Obsluga brakujacych argumentow jest czesta tematyka
 * walidacji danych wejsciowych.
 */
function powitanie(imie?: string): string {
	// Jesli nie podano imienia, wartosc parametru to undefined
	if (imie === undefined) {
		return "Witaj, nieznajomy!";
	}
	return `Witaj, ${imie}!`;
}

/**
 * description: Zwraca pozdrowienie dla osoby. Parametr wiadomosc ma wartosc
 * domyslna "Cześć", uzywana gdy argument nie zostanie podany.
 * architectural-note: Chroni przed powielaniem wywolan z ta sama wartoscia
 * w kazdym miejscu programu.
 * inf04-relevance: Wartosci domyslne upraszczaja wywolania funkcji i sa
 * wykorzystywane w zadaniach dotyczacych projektowania interfejsow.
 */
function pozdrowienie(imie: string, wiadomosc: string = "Cześć"): string {
	return `${wiadomosc}, ${imie}!`;
}

console.log(powitanie()); // Wynik: Witaj, nieznajomy!
console.log(powitanie("Anna")); // Wynik: Witaj, Anna!
console.log(pozdrowienie("Jan")); // Wynik: Cześć, Jan!
console.log(pozdrowienie("Jan", "Hej")); // Wynik: Hej, Jan!

// Oczekiwany wynik:
// Witaj, nieznajomy!
// Witaj, Anna!
// Cześć, Jan!
// Hej, Jan!


// #########################################################################
// Funkcje strzalkowe z typami
// #########################################################################

/**
 * description: Funkcja strzalkowa obliczajaca pole kwadratu o podanym boku.
 * architectural-note: Chroni przed pominieciem typu wyniku w zapisie
 * funkcji strzalkowej.
 * inf04-relevance: Funkcje strzalkowe sa powszechnie uzywane w TypeScript
 * i musza byc poprawnie typowane.
 */
const pole = (bok: number): number => bok * bok;

/**
 * description: Funkcja strzalkowa z blokiem kodu, sumujaca dwie liczby.
 * architectural-note: Chroni przed brakiem instrukcji return w bloku funkcji,
 * co daloby wartosc undefined.
 * inf04-relevance: Rozroznienie zapisu z wyrazeniem i z blokiem kodu
 * jest istotne przy analizie dzialania programow.
 */
const suma = (a: number, b: number): number => {
	const wynik = a + b;
	return wynik;
};

console.log(pole(4)); // Wynik: 16
console.log(suma(7, 8)); // Wynik: 15

// Oczekiwany wynik:
// 16
// 15


// #########################################################################
// Typy funkcji
// #########################################################################

// Typ funkcji: przyjmuje dwie liczby i zwraca liczbe
type Dzialanie = (x: number, y: number) => number;

/**
 * description: Mnozy dwie liczby. Zmienna ma typ Dzialanie, wiec ksztalt
 * funkcji sprawdza kompilator.
 * architectural-note: Chroni przed przypisaniem funkcji o niezgodnej liczbie
 * lub typie parametrow.
 * inf04-relevance: Typy funkcji opisuja kontrakt miedzy czesciami programu,
 * co jest kluczowe przy projektowaniu rozwiazan w INF.04.
 */
const mnozenie: Dzialanie = (x, y) => x * y;

/**
 * description: Odejmuje druga liczbe od pierwszej. Zmienna ma typ Dzialanie.
 * architectural-note: Chroni przed nadaniem funkcji innego ksztaltu niz
 * zdefiniowany w typie.
 * inf04-relevance: Wspolny typ dla wielu funkcji ulatwia ich wymienność
 * i testowanie.
 */
const odejmowanie: Dzialanie = (x, y) => x - y;

console.log(mnozenie(3, 4)); // Wynik: 12
console.log(odejmowanie(10, 3)); // Wynik: 7

// Oczekiwany wynik:
// 12
// 7


// #########################################################################
// Przyklad: Cena produktu z rabatem
// #########################################################################

/**
 * description: Oblicza cene po rabacie. Jesli rabat nie zostanie podany,
 * wynosi 10 procent.
 * architectural-note: Chroni przed blednym obliczeniem ceny przy braku
 * jawnie podanego rabatu, dzieki wartosci domyslnej.
 * inf04-relevance: Polaczenie parametru domyslnego z typem wyniku pokazuje
 * praktyczne zastosowanie typowania w obliczeniach.
 */
function cenaPoRabacie(cena: number, rabat: number = 10): number {
	return cena - (cena * rabat) / 100;
}

/**
 * description: Formatuje kwote do dwoch miejsc po przecinku z dopiskiem zl.
 * architectural-note: Chroni przed niespojnym wyswietlaniem cen w roznych
 * miejscach programu.
 * inf04-relevance: Wyodrebnianie funkcji pomocniczych zwieksza czytelnosc
 * kodu i ulatwia jego testowanie.
 */
const formatujCene = (kwota: number): string => `Cena: ${kwota.toFixed(2)} zł`;

console.log(formatujCene(cenaPoRabacie(200))); // Wynik: Cena: 180.00 zł
console.log(formatujCene(cenaPoRabacie(200, 25))); // Wynik: Cena: 150.00 zł

// Oczekiwany wynik:
// Cena: 180.00 zł
// Cena: 150.00 zł
