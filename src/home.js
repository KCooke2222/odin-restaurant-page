const content = document.querySelector("#content");
import hero from "./hero.jpg";

function loadHome() {
  // title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "Restuarant";
  content.appendChild(title);

  // hero
  const heroImage = document.createElement("img");
  heroImage.className = "hero";
  heroImage.src = hero;
  content.appendChild(heroImage);

  // hours
  const hoursHead = document.createElement("h1");
  hoursHead.textContent = "Hours";
  content.appendChild(hoursHead);

  const hoursP = document.createElement("p");
  hoursP.textContent = `Sunday: 8am - 8pm
Monday: 6am - 6pm
Tuesday: 6am - 6pm
Wednesday: 6am - 6pm
Thursday: 6am - 10pm
Friday: 6am - 10pm
Saturday: 8am - 10pm`;
  content.appendChild(hoursP);

  // location
  const locationHead = document.createElement("h1");
  locationHead.textContent = "Location";
  content.appendChild(locationHead);

  const locationP = document.createElement("p");
  locationP.textContent = "123 Main Street, Springfield, USA";
  content.appendChild(locationP);
}

export default loadHome;
