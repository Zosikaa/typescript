"use strict";
/*

Napisz funkcję obliczSrednia, która przyjmuje tablicę ocen i zwraca liczbę. Wypisz średnią dla podanych ocen.

Dane: [4, 5, 3, 2]

Przykład wywołania i oczekiwany wynik:

function obliczSrednia(oceny: number[]): number {
    const suma = oceny.reduce((a, b) => a + b, 0);
    return suma / oceny.length;
}

console.log(obliczSrednia([4, 5, 3, 2]));
// Wynik:
// 3.5

*/
function obliczSrednia(oceny) {
    const suma = oceny.reduce((a, b) => a + b, 0);
    return suma / oceny.length;
}
console.log(obliczSrednia([4, 5, 3, 2]));
