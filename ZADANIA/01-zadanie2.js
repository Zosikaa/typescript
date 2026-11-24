"use strict";
/*

Napisz funkcję obliczWolneMiejsca z dwoma parametrami liczbowymi i typem zwracanej wartości. Wywołaj ją dla sali i wypisz wynik na konsoli.

Dane: pojemność sali 32 miejsca, w sali 27 uczniów

*/
function obliczWolneMiejsca(miejsca, uczniowie) {
    return miejsca - uczniowie;
}
console.log(`Ilość wolnych miejsc: ${obliczWolneMiejsca(32, 27)}`);
