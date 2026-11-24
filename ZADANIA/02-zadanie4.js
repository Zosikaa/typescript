"use strict";
/*

Rozszerz opisElement o przypadek undefined (zwraca "nieznane") oraz tablice (zwraca "lista: N elementów", gdzie N to długość tablicy), używając Array.isArray.
Dane: [undefined, [1, 2, 3], "Anna"]

*/
function opisElement2(element) {
    if (typeof element === "number") {
        return `liczba: ${element}`;
    }
    else if (typeof element === "string") {
        return `tekst: ${element}`;
    }
    else if (element === null) {
        return "brak";
    }
    else if (typeof element === "undefined") {
        return `nieznane`;
    }
    else if (Array.isArray(element)) {
        return `lista: ${element.length} elementów`;
    }
    else {
        return `inny typ: ${typeof element}`;
    }
}
const dane2 = [undefined, [1, 2, 3], "Anna"];
console.log(dane2.map(opisElement2).join(", "));
