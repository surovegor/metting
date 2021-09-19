const menuButton = document.querySelector(".menu-wrapper"),
      hamburger = document.querySelector(".hamburger-menu"),
      menu = document.querySelector(".header__menu"),
      service = document.querySelector(".header__service");

menuButton.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    menu.classList.toggle("header__menu-visible");
    service.classList.toggle("header__service-visible");
})