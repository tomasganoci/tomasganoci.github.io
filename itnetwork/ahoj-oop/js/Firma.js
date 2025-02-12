class Firma {
  constructor(nazev, sidlo) {
    this.nazev = nazev;
    this.sidlo = sidlo;
    this.zamestnanci = [];
  }
  vypisInfoOFirme() {
    document.write(`Firma se jménem ${this.nazev} a sídlem ${this.sidlo}`);
  }
  pridejZamestnance() {
    const jmeno = prompt("Zadej jméno zaměstnance");
    const vek = prompt("Zadej věk zaměstnance");
    const pozice = prompt("Zadej pozici zaměstnance");
    const zamestnanec = new Zamestnanec(jmeno, vek, pozice);
    this.zamestnanci.push(zamestnanec);
  }
  vypisZamestnance() {
    document.write("<h3>Zaměstnanci</h3>");
    const seznam = document.createElement("ul"); // Vytvoříme seznam jako HTML element
    for (const zamestnanec of this.zamestnanci) {
      // Naplníme jej daty
      seznam.innerHTML += `<li><strong>Jméno</strong>: ${zamestnanec.jmeno}</li>`;
      seznam.innerHTML += `<li><strong>Věk</strong>: ${zamestnanec.vek}</li>`;
      seznam.innerHTML += `<li><strong>Pozice</strong>: ${zamestnanec.pozice}</li><br>`;
    }
    document.body.appendChild(seznam); // Přiřadíme element do body
  }
}
