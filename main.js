const popupOpenLog = document.querySelector(".header__button-login"),
  popupLog = document.querySelector(".login"),
  popupClose = document.querySelector(".popup__close"),
  overlay = document.querySelector(".popups");

function toggleClass(btn, overlay, popup, hide, opacity) {
  btn.addEventListener("click", function (event) {
    popup.classList.toggle(hide);
    overlay.classList.toggle(opacity);
    console.log(event.target);
  });
}
toggleClass(popupOpenLog, overlay, popupLog, "hide", "opacity");
toggleClass(popupClose, overlay, popupLog, "hide", "opacity");

function documentClosePopup(popup, overlay, hide, opacity, btn) {
  document.addEventListener("click", function (e) {
    if (e.target.contains(popup) && e.target !== btn) {
      popup.classList.add(hide);
      overlay.classList.remove(opacity);
    }
  });
}
documentClosePopup(popupLog, overlay, "hide", "opacity", popupOpenLog);

const burger = document.querySelector(".header__burger"),
  burgerMenu = document.querySelector(".header__wrap");

function showBurger(btn, menu) {
  burger.addEventListener("click", function () {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.style.overflow = "hidden";
  });
}

showBurger(burger, burgerMenu, "active");
