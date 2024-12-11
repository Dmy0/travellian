const popupOpenLog = document.querySelector(".header__button-login"),
  popupLog = document.querySelector(".login"),
  popupClose = document.querySelector(".login__close"),
  overlay = document.querySelector(".overlay"),
  popupOpenReg = document.querySelector(".slider__button");
popupRegClose = document.querySelector(".sign__close");
popupOpenSign = document.querySelector(".header__button-signup");
popupSugnClose = document.querySelector(".sign__close");
popupSign = document.querySelector(".sign");

// log
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
// burger
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
// reg btn
function toggleClass(btn, overlay, popup, hide, opacity) {
  btn.addEventListener("click", function (event) {
    popup.classList.toggle(hide);
    overlay.classList.toggle(opacity);
    console.log(event.target);
  });
}
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

// sign
function toggleClass(btn, overlay, popup, hide, opacity) {
  btn.addEventListener("click", function (event) {
    popup.classList.toggle(hide);
    overlay.classList.toggle(opacity);
    console.log(event.target);
  });
}
toggleClass(popupOpenSign, overlay, popupSign, "hide", "opacity");
toggleClass(popupSignClose, overlay, popupSign, "hide", "opacity");

function documentClosePopup(popup, overlay, hide, opacity, btn) {
  document.addEventListener("click", function (e) {
    if (e.target.contains(popup) && e.target !== btn) {
      popup.classList.add(hide);
      overlay.classList.remove(opacity);
    }
  });
}
documentClosePopup(popupSign, overlay, "hide", "opacity", popupOpenReg);
