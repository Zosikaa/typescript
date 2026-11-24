// TypeScript: Typy podstawowe
// Uruchomienie: npx tsc 02p-ts-typyPodstawowe.ts && node 02p-ts-typyPodstawowe.js

// Przykład 1: string, number, boolean
{
	// Adnotacja typu przy każdej zmiennej
	const imieUcznia: string = "Ola";
	const srednia: number = 4.5;
	const aktywny: boolean = true;

	console.log(imieUcznia, srednia, aktywny);
	// Wynik: Ola 4.5 true
}


// Przykład 2: Typy tablicowe
{
	// Dwa równoważne zapisy typu tablicowego
	const przedmioty: string[] = ["matematyka", "fizyka"];
	const ocenyPrzedmiotu: Array<number> = [5, 4, 3];

	console.log(przedmioty[0], ocenyPrzedmiotu.length);
	// Wynik: matematyka 3
}


// Przykład 3: unknown (i any)
{
	/**
	 * description: Opisuje wartość typu unknown po zawężeniu typu przez typeof.
	 * architectural-note: Chroni przed użyciem nieznanej wartości bez sprawdzenia typu.
	 * inf04-relevance: Obsługa danych z formularzy i dziennika o nieznanym typie
	 * wymaga bezpiecznego sprawdzania typów.
	 */
	function opisWartosc(wartosc: unknown): string {
		// typeof zawęża typ do number
		if (typeof wartosc === "number") {
			return "liczba: " + wartosc.toFixed(1);
		}
		return "inny typ: " + (typeof wartosc);
	}

	console.log(opisWartosc(4));
	console.log(opisWartosc("pięć"));
	// Wynik: liczba: 4.0
	// Wynik: inny typ: string
}


// Przykład 4: void, null, undefined
{
	/**
	 * description: Zapisuje ocenę i nic nie zwraca (typ void).
	 * architectural-note: Chroni przed przypadkowym użyciem wyniku funkcji typu void.
	 * inf04-relevance: Funkcje wykonujące akcje, np. zapis oceny w dzienniku,
	 * są podstawą porządkowania kodu.
	 */
	function zapiszOcene(ocena: number): void {
		console.log("Zapisano ocenę:", ocena);
	}

	// Typ z null oznacza brak wartości
	const uwagi: string | null = null;
	// Zmienna bez wartości ma typ undefined
	const kara: undefined = undefined;

	zapiszOcene(5);
	console.log("Uwagi:", uwagi, "Kara:", kara);
	// Wynik: Zapisano ocenę: 5
	// Wynik: Uwagi: null Kara: undefined
}


// Przykład 1: Dane ucznia - adnotacje i wnioskowanie
{
	// Adnotacje typów przy zmiennej i parametrach, wnioskowanie przy wieku
	const imie: string = "Anna";
	let wiek = 16; // TypeScript wnioskuje typ number
	// wiek = '16'; // błąd: Type 'string' is not assignable to type 'number'

	/**
	 * description: Tworzy opis ucznia z imienia i rocznika.
	 * architectural-note: Chroni przed łączeniem tekstu z liczbą bez kontroli typów.
	 * inf04-relevance: Tworzenie opisów rekordów ucznia jest typowym zadaniem
	 * w systemie zarządzania szkołą.
	 */
	function opisUcznia(uczen: string, rocznik: number): string {
		// Szablon tekstowy łączy string z liczbą
		return `${uczen}, rocznik ${rocznik}`;
	}

	console.log(opisUcznia(imie, 2008));
	console.log("Wiek:", wiek);
	// Wynik: Anna, rocznik 2008
	// Wynik: Wiek: 16

	// Błąd (tylko do omówienia, zakomentowany):
	// wiek += "1"; // błąd: dodanie tekstu do liczby
}


// Przykład 2: Oceny w klasie - tablica, void i null
{
	// Tablica ocen ucznia z typem tablicowym
	const oceny: number[] = [5, 4, 3, 5];

	/**
	 * description: Wypisuje wszystkie oceny z listy, nic nie zwraca.
	 * architectural-note: Chroni przed oczekiwaniem zwrotu z funkcji void.
	 * inf04-relevance: Iteracja po tablicy ocen to podstawowa operacja w dzienniku.
	 */
	function wypiszOceny(lista: number[]): void {
		for (const ocena of lista) {
			console.log("Ocena:", ocena);
		}
	}

	// Ostatnia ocena może być jeszcze nieznana (null)
	let ostatniaOcena: number | null = null;
	ostatniaOcena = oceny[oceny.length - 1];

	wypiszOceny(oceny);
	console.log("Ostatnia:", ostatniaOcena);
	// Wynik: Ocena: 5
	// Wynik: Ocena: 4
	// Wynik: Ocena: 3
	// Wynik: Ocena: 5
	// Wynik: Ostatnia: 5

	// Błąd (tylko do omówienia, zakomentowany):
	// ostatniaOcena = oceny[oceny.length]; // błąd: indeks poza zakresem
}


// Zadanie 1: rozgrzewka
{
	const imieNauczyciela: string = "Piotr";
	const latPracy: number = 12;
	const naEtacie: boolean = true;

	console.log(imieNauczyciela, latPracy, naEtacie);
	// Wynik: Piotr 12 true
}


// Zadanie 2: praktyka
{
	/**
	 * description: Oblicza średnią arytmetyczną z tablicy ocen.
	 * architectural-note: Chroni przed dzieleniem przez niezdefiniowaną wartość
	 * poprzez jawny typ number[] parametru.
	 * inf04-relevance: Obliczanie średniej ocen jest typowym zadaniem w dzienniku.
	 */
	function obliczSrednia(lista: number[]): number {
		let suma: number = 0;
		for (const ocena of lista) {
			suma += ocena;
		}
		return suma / lista.length;
	}

	console.log(obliczSrednia([4, 5, 3, 2]));
	// Wynik: 3.5
}


// Zadanie 3: wyzwanie
{
	/**
	 * description: Opisuje element o nieznanym typie z formularza.
	 * architectural-note: Chroni przed użyciem wartości unknown bez zawężenia typu.
	 * inf04-relevance: Dane z formularzy mogą mieć różne typy, a ich obsługa
	 * wymaga kontroli typów.
	 */
	function opisElement(element: unknown): string {
		if (element === null) {
			return "brak";
		}
		if (typeof element === "number") {
			return "liczba: " + element;
		}
		if (typeof element === "string") {
			return "tekst: " + element;
		}
		return "inny typ: " + typeof element;
	}

	const elementy: unknown[] = [16, "Piotr", null, true];
	for (const element of elementy) {
		console.log(opisElement(element));
	}
	// Wynik: liczba: 16
	// Wynik: tekst: Piotr
	// Wynik: brak
	// Wynik: inny typ: boolean
}


// Zadanie 4: rozszerzenie
{
	/**
	 * description: Rozszerza opis elementu o wartość undefined oraz tablice.
	 * architectural-note: Chroni przed nieobsłużonymi przypadkami unknown,
	 * dzięki jawnemu sprawdzeniu każdego typu.
	 * inf04-relevance: Obsługa list i braków danych w dzienniku elektronicznym
	 * wymaga pełnej kontroli typów.
	 */
	function opisElementRozszerzony(element: unknown): string {
		if (element === undefined) {
			return "nieznane";
		}
		if (element === null) {
			return "brak";
		}
		if (Array.isArray(element)) {
			const liczbaElementow: number = (element as readonly unknown[]).length;
			return "lista: " + liczbaElementow + " elementow";
		}
		if (typeof element === "number") {
			return "liczba: " + element;
		}
		if (typeof element === "string") {
			return "tekst: " + element;
		}
		return "inny typ: " + typeof element;
	}

	console.log(opisElementRozszerzony(undefined));
	console.log(opisElementRozszerzony([1, 2, 3]));
	// Wynik: nieznane
	// Wynik: lista: 3 elementow
}
