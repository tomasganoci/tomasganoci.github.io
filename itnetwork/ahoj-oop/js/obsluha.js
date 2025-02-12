"use strict";
// const zdravic = new Zdravic();
// zdravic.pozdrav();


class Uzivatel {
    constructor(jmeno, vek) {
        this.jmeno = jmeno;
        this.vek = vek;
    }

    toString() {
        return `${this.jmeno} (${this.vek})`;
    }
}
function vypisPromenne() {
    console.table({
            "a": a,
            "b": b,
            "jan": jan,
            "josef": josef
        });
}

let a = 56;
let b = 28;
let jan = new Uzivatel("Jan Novák", 28);
let josef = new Uzivatel("Josef Nový", 32);

vypisPromenne();

// Přiřazení
a = b;
jan = josef;

vypisPromenne();

const microsoft = new Firma("Microsoft", "Washington");
const google = new Firma("Google", "Silicon Valley");
document.write(microsoft.nazev);
document.write("<br>");
document.write(google.nazev);
document.write("<br>");
microsoft.vypisInfoOFirme();
// microsoft.pridejZamestnance();
// microsoft.pridejZamestnance();
microsoft.vypisZamestnance();