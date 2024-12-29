const showLinkList = document.getElementById("show-list");
const hideLinkList = document.getElementById("hide-list");
const toggleActive = document.querySelectorAll(".nav__link a");
const servicesContent = document.querySelectorAll(".services__content");
const testimonialNames = document.querySelectorAll(".client__name");
const clientCards = document.querySelectorAll(".comment__cards");

// Function to remove 'active' class from all elements in a NodeList
function removeActiveClassFromAll(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}

// Function to add 'active' class to specific element and its corresponding card
function activateElement(name, index, testimonialActive, clientCards) {
  removeActiveClassFromAll(testimonialActive);
  removeActiveClassFromAll(clientCards);

  name.classList.add("active");
  clientCards[index].classList.add("active");
}
// Add event listeners to each name
testimonialNames.forEach((name, index) => {
  name.addEventListener("click", () => {
    activateElement(name, index, testimonialNames, clientCards);
  });
});

// change the image of services content on hover
servicesContent.forEach((service, index) => {
  const img = service.querySelector("img");

  const handleImageHover = (hover) => {
    const suffix = hover ? "-hover" : "";
    img.setAttribute(
      "src",
      `./assets/images/service-icon${suffix}-0${index + 1}.png`
    );
  };
  service.addEventListener("mouseover", () => handleImageHover(true));
  service.addEventListener("mouseout", () => handleImageHover(false));
});

// toggle
hideLinkList.style.display = "none";
showLinkList.addEventListener("click", () => {
  const navList = document.getElementById("nav-list");
  navList.style = ` opacity: 1; visibility: visible `;
  showLinkList.style.display = "none";
  hideLinkList.style.display = "block";
});
hideLinkList.addEventListener("click", () => {
  const navList = document.getElementById("nav-list");
  navList.style = ` opacity: 0; visibility: hidden `;
  showLinkList.style.display = "block";
  hideLinkList.style.display = "none";
});
toggleActive.forEach((link) => {
  link.className = "";
  link.addEventListener("click", () => {
    link.classList.contains("active") ? link.classList.toggle("active") : false;
  });
});
