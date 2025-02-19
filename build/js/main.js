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
    currentItem > 0 ? (currentItem--, updateSlider()) : currentItem
})

moveRight.addEventListener("click", () =>{
    currentItem < slidesQuantity - 1 ? (currentItem++, updateSlider()) : currentItem
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