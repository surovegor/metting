const menuButton = document.querySelector(".menu-wrapper"),
      hamburger = document.querySelector(".hamburger-menu"),
      menu = document.querySelector(".header__menu"),
      service = document.querySelector(".header__service");

menuButton.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    menu.classList.toggle("header__menu-visible");
    service.classList.toggle("header__service-visible");
});

const priceButton = document.querySelectorAll(".price__button");
     

priceButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab"),
              cardPrice = document.querySelectorAll(tabId),
              cardPriceAll = document.querySelectorAll(".card__price");

        if(!btn.classList.contains("price__button_active")) {
            priceButton.forEach(item => item.classList.remove("price__button_active"));
            btn.classList.add("price__button_active");

            cardPriceAll.forEach((card) => card.classList.remove("card__price_active"));
            cardPrice.forEach((card) => card.classList.add("card__price_active"));
        }
    });
});