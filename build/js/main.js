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