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

document.addEventListener('DOMContentLoaded', () => {
    const checkinInput = document.getElementById('checkin');
    const calendar = document.querySelector('.calendar');
    const prevBtn = document.querySelector('.calendar__prev');
    const nextBtn = document.querySelector('.calendar__next');
    const monthYearEl = document.getElementById('month-year');
    const daysContainer = document.getElementById('calendar-days');
    const dayNamesContainer = document.querySelector('.calendar__day-names');
  
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    let currentDate = new Date();
  
    const renderDayNames = () => {
      dayNamesContainer.innerHTML = dayNames.map(day => `<span>${day}</span>`).join('');
    };
  
    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      monthYearEl.textContent = `${monthNames[month]} ${year}`;
  
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      daysContainer.innerHTML = '';
  
      for (let i = 0; i < firstDay; i++) {
        const emptySpan = document.createElement('span');
        emptySpan.classList.add('calendar__days-hidden');
        daysContainer.appendChild(emptySpan);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const daySpan = document.createElement('span');
        daySpan.textContent = day;
  
      
        if (
          day === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear()
        ) {
          daySpan.classList.add('today');
        }
  
        
        daySpan.addEventListener('click', () => {
        
          checkinInput.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          
          calendar.classList.remove('open');
        });
  
        daysContainer.appendChild(daySpan);
      }
    };
  
    const changeMonth = (delta) => {
      currentDate.setMonth(currentDate.getMonth() + delta);
      renderCalendar();
    };
  
    prevBtn.addEventListener('click', () => changeMonth(-1));
    nextBtn.addEventListener('click', () => changeMonth(1));
  
    checkinInput.addEventListener('click', () => {
      calendar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!calendar.contains(e.target) && e.target !== checkinInput) {
          calendar.classList.remove('open');
        }
      });
  

    renderDayNames();
    renderCalendar();
  });
