/*

Napisz funkcję obliczWolneMiejsca z dwoma parametrami liczbowymi i typem zwracanej wartości. Wywołaj ją dla sali i wypisz wynik na konsoli.

Dane: pojemność sali 32 miejsca, w sali 27 uczniów

*/

function obliczWolneMiejsca(miejsca: number, uczniowie: number): 
number {
    return miejsca - uczniowie;
}

console.log(obliczWolneMiejsca(32, 27));