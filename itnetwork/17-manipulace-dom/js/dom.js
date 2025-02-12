document.addEventListener("DOMContentLoaded", function () {
  let elements = this.getElementsByClassName("important");
  for (let index = 0; index < elements.length; index++) {
    console.log(elements[index]);
  }
  let paragraphs = this.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
  }
  let title = document.querySelector("#greeting");
  let text = document.querySelector(".important");
  let picture = document.querySelector('[src="img/pastry.jpg"]');
  let spans = document.querySelectorAll("span");

  console.log(title);
  console.log(text);
  console.log(picture);

  for (let i = 0; i < spans.length; i++) {
    console.log(spans[i]);
  }
  // let paragraph = document.querySelector("p");
  // paragraph.innerText = "Dnes máme v nabídce:";
  let hiddenText = document.querySelectorAll("p");
  console.log(hiddenText[1].innerText);
  console.log(hiddenText[1].textContent);
  let products = document.querySelectorAll("li");
  let fifthItem = products[4];
  console.log(fifthItem.innerText);
  products[4].innerHTML = "<s>Dorty</s>";
  console.log(fifthItem.innerHTML);
  let logoImage = document.querySelector("#logo");
  console.log(logoImage.hasAttribute("alt")); // Vrátí true
  let image = document.querySelector('[src="img/pastry.jpg"]');
  console.log(image.hasAttribute("alt"));
  image.setAttribute("alt", "Chléb");
  console.log(image.hasAttribute("alt")); // Nyní vrátí true
  let firstListItem = document.querySelector("li");
  firstListItem.setAttribute("class", "important");
  let headerElements = document.querySelector("header");
  console.log(headerElements.childNodes);
  let paragraph = document.createElement("div");
  paragraph.textContent =
    "Každý den po 16:00 poskytujeme na veškerý sortiment 50% slevu.";
  let parent = document.getElementById("info");
  parent.appendChild(paragraph);
  document.body.appendChild(paragraph);
  let heading = document.createElement("h2");
  heading.textContent = "Aktuality:";
  let element = document.getElementsByTagName("div");
  document.body.insertBefore(heading, element[0]);
  let styledHeading = document.querySelector("h2");
  styledHeading.setAttribute("class", "important");
  let newParagraph = document.createElement("p");
  let strongElement = document.createElement("strong");
  strongElement.textContent = "Novinky z naší pekárny:";
  newParagraph.appendChild(strongElement);
  document.body.replaceChild(newParagraph, heading);
  newParagraph.removeChild(strongElement);
  let lidi = ["Petr Novák", "Jana Čechová", "Petr Nejedlý"];
  console.table(lidi)
});
