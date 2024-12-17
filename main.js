const popupOpenLog = document.querySelector(".header__button-login"),
  popupLog = document.querySelector(".login"),
  popupClose = document.querySelector(".login__close"),
  overlay = document.querySelector(".overlay"),
  popupOpenReg = document.querySelector(".slider__button");
popupRegClose = document.querySelector(".sign__close");
popupOpenSign = document.querySelector(".header__button-signup");
popupSignClose = document.querySelector(".sign__close");
popupSign = document.querySelector(".sign");

// log
function toggleClass(btn, overlay, popup, hide, opacity) {
  btn.addEventListener("click", function (event) {
    this.classList.toggle("active");
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
// burger
const burger = document.querySelector(".header__burger"),
  burgerMenu = document.querySelector(".header__wrap");

toggleClass(burger, document.body, burgerMenu, "active", "overflow");
// reg btn
toggleClass(popupOpenReg, overlay, popupSign, "hide", "opacity");
toggleClass(popupRegClose, overlay, popupSign, "hide", "opacity");

function documentClosePopup(popup, overlay, hide, opacity, btn) {
  document.addEventListener("click", function (e) {
    if (e.target.contains(popup) && e.target !== btn) {
      popup.classList.add(hide);
      overlay.classList.remove(opacity);
    }
  });
}
documentClosePopup(popupSign, overlay, "hide", "opacity", popupOpenReg);

toggleClass(popupOpenSign, overlay, popupSign, "hide", "opacity");
