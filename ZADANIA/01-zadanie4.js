"use strict";
/*

Rozszerz funkcję podsumujLekcje o pierwszy parametr numerLekcji typu number. Komunikat ma zaczynać się od tekstu "Lekcja N: " i obejmować oba wywołania z Zadania 3 z numerami lekcji 3 i 4.

*/
function podsumujLekcje(numerLekcji, przedmiot, sala, pojemnosc, uczniowie) {
    if (uczniowie > pojemnosc) {
        return `Lekcja ${numerLekcji}: brak miejsc`;
    }
    else {
        const wolneMiejsca = pojemnosc - uczniowie;
        return `Lekcja ${numerLekcji}: wolne miejsca: ${wolneMiejsca}`;
    }
}
console.log(podsumujLekcje(3, "Fizyka", "A204", 20, 23));
console.log(podsumujLekcje(4, "Historia", "C01", 30, 18));
