import burgerClassic from "./img/6ab99ab9-2606-4c9f-8379-4d80845b2b54_1920x1080.jpg";
import burgerBun from "./img/burger_with_bun.webp";
import burgerDenny from "./img/Denny.jpg";
import burgerHQ from "./img/hq720.jpg";
import burgerStack from "./img/jk9kllaorr211.jpg";
const content = document.querySelector("#content");

const sections = [
  {
    name: "Classic Giants",
    items: [
      {
        name: "Giant Classic",
        description: "Big burger, big bite.",
        price: 12.99,
        image: burgerClassic,
      },
      {
        name: "Bun Giant",
        description: "Simple, stacked, bold.",
        price: 11.99,
        image: burgerBun,
      },
    ],
  },
  {
    name: "Loaded Towers",
    items: [
      {
        name: "Tower Deluxe",
        description: "Tall, juicy, loaded.",
        price: 14.49,
        image: burgerHQ,
      },
      {
        name: "Big Pepper",
        description: "Crunch, sauce, heft.",
        price: 13.99,
        image: burgerStack,
      },
    ],
  },
  {
    name: "Crispy & Crunchy",
    items: [
      {
        name: "Crunch Giant",
        description: "Crisp outside, soft inside.",
        price: 12.49,
        image: burgerDenny,
      },
    ],
  },
];

function createMenuItem(item) {
  // div
  const itemDiv = document.createElement("div");
  itemDiv.className = "menu-item";

  const infoDiv = document.createElement("div");
  infoDiv.className = "menu-info";

  // h3 (name)
  const name = document.createElement("h3");
  name.textContent = item.name;

  // p (description)
  const desc = document.createElement("p");
  desc.textContent = item.description;

  // h3 (price)
  const price = document.createElement("h3");
  price.className = "price menu-price";
  price.textContent = `$${item.price}`;

  // img
  const img = document.createElement("img");
  img.className = "menu-image";
  img.src = item.image;
  img.alt = item.name;

  infoDiv.append(name, price, desc);
  itemDiv.append(infoDiv, img);
  return itemDiv;
}

function createMenuSection(section) {
  // div
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "menu-section section-block";

  // name
  const name = document.createElement("h1");
  name.textContent = section.name;
  sectionDiv.appendChild(name);

  for (const item of section.items) {
    sectionDiv.append(createMenuItem(item));
  }
  return sectionDiv;
}

function loadMenu() {
  // title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "Menu";
  content.appendChild(title);

  // sections
  for (const section of sections) {
    content.appendChild(createMenuSection(section));
  }
}

export default loadMenu;
