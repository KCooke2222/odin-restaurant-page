import hero from "./img/Denny.jpg";
const content = document.querySelector("#content");

function loadAbout() {
  // title wrapper
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-wrapper";

  // title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "About Us";

  // hero
  const heroImage = document.createElement("img");
  heroImage.className = "hero";
  heroImage.src = hero;

  // append
  titleDiv.append(title, heroImage);
  content.appendChild(titleDiv);

  // story section
  const storySection = document.createElement("section");
  storySection.className = "section-block";

  const storyHead = document.createElement("h2");
  storyHead.textContent = "Our Story";
  storySection.appendChild(storyHead);

  const storyP = document.createElement("p");
  storyP.textContent =
    "We started as a neighborhood spot with one goal: make a giant burger worth the trip.";
  storySection.appendChild(storyP);
  content.appendChild(storySection);

  // mission section
  const missionSection = document.createElement("section");
  missionSection.className = "section-block";

  const missionHead = document.createElement("h2");
  missionHead.textContent = "Our Mission";
  missionSection.appendChild(missionHead);

  const missionP = document.createElement("p");
  missionP.textContent =
    "Cook it hot, keep it simple, treat people right, and never skimp on the stack.";
  missionSection.appendChild(missionP);
  content.appendChild(missionSection);
}

export default loadAbout;
