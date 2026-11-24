"use strict";
/*

Napisz funkcję przywitaj, która przyjmuje imię typu string oraz opcjonalny tytuł typu string z wartością domyślną "Pan". Funkcja ma zwracać tekst w formie Tytuł Imię. Wywołaj funkcję bez tytułu oraz z tytułem "Pani".

*/
function przywitaj(imie, tytul = "Pani") {
    if (tytul === undefined) {
        return `${imie}`;
    }
    return `${tytul} ${imie}`;
}
console.log(przywitaj("Anna", "Pani"));
console.log(przywitaj("Zosia"));
