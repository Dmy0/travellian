// let footer = document.querySelector(".footer")

// let input2 = footer.querySelector(".footer__right-item-input input")

// let footerRight = document.querySelectorAll(".footer__right-function")

// let input = document.querySelector(".footer__right-item-input input")
// let textBlock = document.querySelector(".footer__right-function-title")

// console.log(footerRight[1])

// input.addEventListener("input", function (e){
//        textBlock.textContent = input.value
// })

// 2 classa -overlay(opacity 1 transition to opacity 0.4) -hide(display none) class list na body method style body.style.overflow = "hidden" "visable"

const popupOpenLog = document.querySelector(".header__button-login"),
  popupLog = document.querySelector(".login"),
  popup = document.querySelector(".popup__close"),
  overlay = document.querySelector(".popups");

function toggleClass(btn, overlay, popup, hide, opacity) {
  btn.addEventListener("click", function (event) {
    popup.classList.toggle(hide);
    overlay.classList.toggle(opacity);
    console.log(event.target);
  });
}
toggleClass(popupOpenLog, popup, popupLog, "hide", "opacity");
toggleClass(popup, popup, popupLog, "hide", "opacity");

// function documentClosePopup(popup, hide, opacity, overlay) {
//   document.addEventListener("click", function (e) {
//     if (!popup.contains(e.target)) {
//       popup.classList.remove(hide);
//       overlay.classList.add(opacity);
//     }
//   });
// }

function documentClosePopup(popup, hide, opacity, overlay) {
  document.addEventListener("click", function (e) {
    if (!popup.contains(e.target)) {
      // Проверяем, находится ли клик вне popup
      popup.classList.add(hide); // Скрываем popup
      overlay.classList.remove(opacity); // Убираем затемнение
    }
  });
}
// documentClosePopup(popup, overlay, "hide", "opacity");
