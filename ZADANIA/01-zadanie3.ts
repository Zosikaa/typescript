/*

Napisz funkcję podsumujLekcje, która dla przedmiotu, sali, pojemności i liczby uczniów zwraca komunikat "Brak miejsc", gdy uczniów jest więcej niż miejsc, a w przeciwnym razie liczbę wolnych miejsc. Wywołaj ją dwa razy dla danych z pola dane i wypisz oba wyniki.

Dane: Fizyka, sala A204, pojemność 20, uczniów 23; Historia, sala C01, pojemność 30, uczniów 18

*/

function podsumujLekcje(przedmiot: string, sala: string, pojemnosc: number, uczniowie: number):
string {
    if (uczniowie > pojemnosc) {
        return "Brak miejsc";
    } else {
        const wolneMiejsca = pojemnosc - uczniowie;
        return `Wolne miejsca: ${wolneMiejsca}`;
    }
}

console.log(podsumujLekcje("Fizyka", "A204", 20, 23));
console.log(podsumujLekcje("Historia", "C01", 30, 18));
