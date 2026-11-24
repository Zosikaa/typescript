// TypeScript: Wstęp do TypeScript
/* Uruchomienie:
1. `tsc --init` w katalogu projektu (tworzy plik tsconfig.json)
2. Uruchomienie z kompilacją:
	1. `tsc 01p-ts-wstep.ts` (kompilacja do JavaScript)
	2. `node 01p-ts-wstep.js` (uruchomienie skompilowanego pliku)
3. Uruchomienie z kompilacją w tle:
	`tsc --watch 01p-ts-wstep.ts` (automatyczna kompilacja przy zmianach)
4. Uruchomienie z kompilacją w tle (bez tworzenia pliku `01p-ts-wstep.js`) i automatycznym uruchamianiem:
	`npm run watch 01p-ts-wstep.ts` (uruchomienie z kompilacją w tle i automatycznym uruchamianiem)
*/


// Przykład 1: Adnotacja typu zmiennej
// Dwukropek po nazwie zmiennej podaje jej typ, a TypeScript pilnuje zgodności wartości z typem
// Nazwa klasy jako tekst, typ string
let nazwaKlasy: string = "3A";
// Liczba uczniow w klasie, typ number
let liczbaUczniow: number = 28;
console.log(`Klasa ${nazwaKlasy} ma ${liczbaUczniow} uczniow`);
// Wynik:
// Klasa 3A ma 28 uczniow


// Przykład 2: Plik .ts i kompilacja tsc
// Funkcja z typami parametrów i typem zwracanej wartości (string)
// Funkcja z typami parametrow i typem zwracanej wartosci (string)
function opiszLekcje(przedmiot: string, sala: string, numerLekcji: number): string {
  // Skladamy tekst z podanych danych
  return `Lekcja ${numerLekcji}: ${przedmiot}, sala ${sala}`;
}
// Wywolanie funkcji i wypisanie wyniku na konsoli
console.log(opiszLekcje("Fizyka", "105", 2));
// Wynik:
// Lekcja 2: Fizyka, sala 105


// Przykład 1: Dane ucznia z adnotacjami typów
// Cel: zobaczyć, jak adnotacja typu opisuje dane ucznia
// Dane ucznia: imie, numer w dzienniku i informacja o obecnosci
let imieUcznia: string = "Anna";
let numerDziennika: number = 12;
let czyObecny: boolean = true;
console.log(`Uczen: ${imieUcznia}, nr w dzienniku: ${numerDziennika}`);
console.log(`Obecny: ${czyObecny}`);
// Wynik:
// Uczen: Anna, nr w dzienniku: 12
// Obecny: true

// Błąd: literówka w nazwie zmiennej (czyObecnyy zamiast czyObecny)
// Zmiennej czyObecnyy nie ma, więc kompilator zgłasza: Cannot find name 'czyObecnyy'
// Objaw: ReferenceError: czyObecnyy is not defined
// console.log(`Obecny: ${czyObecnyy}`);


// Przykład 2: Funkcja wystawiająca ocenę
// Cel: zobaczyć, że funkcja z typem zwracanym string musi zwrócić tekst
// Funkcja zwraca tekst z wpisem oceny: typ zwracany to string
function wystawOcene(imie: string, ocena: number): string {
  // Zlozenie komunikatu z imienia ucznia i oceny
  return `Wpisano ocene ${ocena} dla ucznia ${imie}`;
}
// Wywolanie funkcji dla ucznia Jan z ocena 5
console.log(wystawOcene("Jan", 5));
// Wynik:
// Wpisano ocene 5 dla ucznia Jan

// Błąd: brak instrukcji return w funkcji z typem zwracanym string
// Kompilator zgłasza: Function lacks ending return statement (TS2366)
// Bez kompilacji kod wypisałby undefined
// function wystawOcene(imie: string, ocena: number): string {
// 	console.log(`Wpisano ocene ${ocena} dla ucznia ${imie}`);
// }
