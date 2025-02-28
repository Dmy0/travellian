const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function moveSlides(i) {
    slides[currentSlide].classList.remove('opacity'); 
    slides[i].classList.add('opacity'); 
    currentSlide = i; 
}

slides[currentSlide].classList.add('opacity');

setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length; 
    moveSlides(nextSlide);
}, 3000);


const slider = document.querySelector(".distanation__slider");
const sliderItems = document.querySelectorAll(".distanation__slider-item");
const moveLeft = document.querySelector(".distanation__top-left");
const moveRight = document.querySelector(".distanation__top-right");

let currentItem = 0;
const slidesQuantity = sliderItems.length;
const itemWidth = 532;

function updateSlider() {
    slider.style.transform = `translateX(${-currentItem * itemWidth}px)`;
}

moveLeft.addEventListener("click", ()=>{
    if (currentItem > 0) {
        updateSlider(--currentItem);
    } else {
        currentItem = slidesQuantity -3
        updateSlider(currentItem)
    }
})

moveRight.addEventListener("click", () =>{
    if (currentItem < slidesQuantity -3) {
        updateSlider(++currentItem);
    } else {
        currentItem = 0;
        updateSlider(currentItem);
    }
})
updateSlider();

function validateEmail() {
    const emailInput = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  }

  const popupOpenLog = document.querySelector(".header__buttons-login"),
  popupLog = document.querySelector(".login"),
  popupOpenSign = document.querySelector(".header__buttons-signup"),
  popupSign = document.querySelector(".sign"),
  overlay = document.querySelector(".overlay"),
  popupCloseBtns = document.querySelectorAll(".close");

function toggleClass(btn, popup) {
btn.addEventListener("click", function (e) {
    popup.classList.toggle("hide");
    overlay.classList.toggle("opacity");
});
}

toggleClass(popupOpenLog, popupLog);
toggleClass(popupOpenSign, popupSign);

popupCloseBtns.forEach(btn => {
btn.addEventListener("click", function (e) {
    popupLog.classList.add("hide");
    popupSign.classList.add("hide");
    overlay.classList.remove("opacity");
});
});

document.addEventListener("click", function (e) {
if (!popupLog.contains(e.target) && !popupOpenLog.contains(e.target) && !popupLog.classList.contains("hide")) {
    popupLog.classList.add("hide");
    overlay.classList.remove("opacity");
}
if (!popupSign.contains(e.target) && !popupOpenSign.contains(e.target) && !popupSign.classList.contains("hide")) {
    popupSign.classList.add("hide");
    overlay.classList.remove("opacity");
}
});