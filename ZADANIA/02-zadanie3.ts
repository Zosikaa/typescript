/*

Napisz funkcję opisElement(element: unknown): string, która zwraca "liczba: X" dla number, "tekst: X" dla string, "brak" dla null i "inny typ: NAZWA" dla pozostałych. Wypisz opis każdego elementu z tablicy.

Dane: [16, "Piotr", null, true]

*/

function opisElement1(element: unknown): 
string {
    if (typeof element === "number") {
        return `liczba: ${element}`;

    } else if (typeof element === "string") {
        return `tekst: ${element}`;

    } else if (element === null) {
        return "brak";

    } else {
        return `inny typ: ${typeof element}`;
    }

}

const dane1: unknown[] = [16, "Piotr", null, true];

console.log (dane1.map(opisElement1).join(", "));




