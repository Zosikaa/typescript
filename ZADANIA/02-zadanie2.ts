/*

Napisz funkcję obliczSrednia, która przyjmuje tablicę ocen i zwraca liczbę. Wypisz średnią dla podanych ocen.

*/

function obliczSrednia(oceny: number[]): number {
    const suma = oceny.reduce((a, b) => a + b, 0);
	return suma / oceny.length;
}

console.log(obliczSrednia([4, 5, 3, 2]));