import hero from "./img/hero.jpg";
const content = document.querySelector("#content");

function loadHome() {
  // title wrapper
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-wrapper";

  // title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "MASSIVE BURGER";

  // hero
  const heroImage = document.createElement("img");
  heroImage.className = "hero";
  heroImage.src = hero;

  // append
  titleDiv.append(title, heroImage);
  content.appendChild(titleDiv);

  // hours section
  const hoursSection = document.createElement("section");
  hoursSection.className = "section-block hours";

  const hoursHead = document.createElement("h2");
  hoursHead.textContent = "Hours";
  hoursSection.appendChild(hoursHead);

  const hours = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];

  hours.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    hoursSection.appendChild(p);
  });

  content.appendChild(hoursSection);

  // location section
  const locationSection = document.createElement("section");
  locationSection.className = "section-block location";

  const locationHead = document.createElement("h2");
  locationHead.textContent = "Location";
  locationSection.appendChild(locationHead);

  const locationP = document.createElement("p");
  locationP.textContent = "123 Main Street, Springfield, USA";
  locationSection.appendChild(locationP);
  content.appendChild(locationSection);
}

export default loadHome;
