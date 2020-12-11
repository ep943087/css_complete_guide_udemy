const backgrop = document.querySelector(".backdrop");
const planButton = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

const openModal = () => {
  modal.classList.add("open");
  backgrop.classList.add("open");
};

const closeModal = () => {
  if (modalButton) modal.classList.remove("open");
  backgrop.classList.remove("open");
  closeMenu();
};

const showMenu = () => {
  mobileNav.classList.add("open");
  backgrop.classList.add("open");
};

const closeMenu = () => {
  mobileNav.classList.remove("open");
};

planButton.forEach((button) => {
  button.addEventListener("click", openModal);
});

backgrop.addEventListener("click", closeModal);

if (modalButton) modalButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", showMenu);

ctaButton.addEventListener("animationstart", (e) => {
  console.log("Animation started", e);
});

ctaButton.addEventListener("animationend", (e) => {
  console.log("Animation ended", e);
});

ctaButton.addEventListener("animationiteration", (e) => {
  console.log("Animation iteration", e);
});
