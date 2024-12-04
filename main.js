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

let popup = document.querySelector(".header__button-login");
popup.addEventListener("click", function () {
  popup.classList.add(".popup__open");
});
let popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", function () {
  popupClose.classList.remove(".popup__open");
});
