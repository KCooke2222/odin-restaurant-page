const content = document.querySelector("#content");
import hero from "./hero.jpg";

function loadAbout() {
  // title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "About Us";
  content.appendChild(title);

  // hero
  const heroImage = document.createElement("img");
  heroImage.className = "hero";
  heroImage.src = hero;
  content.appendChild(heroImage);

  // story
  const storyHead = document.createElement("h1");
  storyHead.textContent = "Our Story";
  content.appendChild(storyHead);

  const storyP = document.createElement("p");
  storyP.textContent =
    "Founded in 2020, our restaurant focuses on simple ingredients, bold flavors, and a welcoming atmosphere.";
  content.appendChild(storyP);

  // mission
  const missionHead = document.createElement("h1");
  missionHead.textContent = "Our Mission";
  content.appendChild(missionHead);

  const missionP = document.createElement("p");
  missionP.textContent =
    "To serve high-quality food made with care, while creating a place people want to come back to.";
  content.appendChild(missionP);
}

export default loadAbout;
