const content = document.querySelector("#content");

const sections = [
  {
    name: "Starters",
    items: [
      {
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter",
        price: 5.99,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Bruschetta",
        description: "Tomato, basil, olive oil",
        price: 6.99,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    name: "Mains",
    items: [
      {
        name: "Margherita Pizza",
        description: "Tomato, mozzarella, basil",
        price: 12.99,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Pasta Carbonara",
        description: "Creamy sauce, pancetta, parmesan",
        price: 14.99,
        image: "https://via.placeholder.com/150",
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

  infoDiv.append(name, desc, price);
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
