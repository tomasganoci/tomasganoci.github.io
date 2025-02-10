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
  let paragraph = document.querySelector("p");
  paragraph.innerText = "Dnes máme v nabídce:";
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
});
