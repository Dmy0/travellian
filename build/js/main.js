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
  const checkoutInput = document.getElementById('checkout');
  const prevBtn = document.querySelector('.calendar__prev');
  const nextBtn = document.querySelector('.calendar__next');
  const monthYearEl = document.querySelectorAll('.month-year');
  const daysContainer = document.querySelectorAll('.calendar-days');
  const dayNamesContainer = document.querySelectorAll('.calendar__day-names');

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let currentDate = new Date();

  const renderDayNames = (dayNamesContainer) => {
    dayNamesContainer.innerHTML = dayNames.map(day => `<span>${day}</span>`).join('');
  };

  const renderCalendar = (monthYearEl, daysContainer) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearEl.forEach(elem => {
        elem.textContent = `${monthNames[month]} ${year}`;
    });

    const firstDay = new Date(year, month, 0).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    daysContainer.forEach(elem => {
        elem.innerHTML = ''; 

        for (let i = 0; i < firstDay; i++) {
            const emptySpan = document.createElement('span');
            emptySpan.classList.add('calendar__days-hidden');
            elem.appendChild(emptySpan);
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

            daySpan.addEventListener("click", (e) => {
                e.stopPropagation(); 
                checkinInput.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                const calendar = elem.closest('.calendar');
                if (calendar) calendar.classList.remove('open');
            });

            elem.appendChild(daySpan);
        }
    });
  };

  const changeMonth = (delta, monthYearEl, daysContainer) => {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar(monthYearEl, daysContainer);
  };

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    changeMonth(-1, monthYearEl, daysContainer);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    changeMonth(1, monthYearEl, daysContainer);
  });

  checkinInput.addEventListener('click', (e) => {
    e.stopPropagation(); 
    let calendar = checkinInput.querySelector(".calendar");
    if (calendar) {
      
      calendar.classList.toggle("open");
     
      let otherCalendar = checkoutInput.querySelector(".calendar");
      if (otherCalendar && otherCalendar.classList.contains('open')) {
        otherCalendar.classList.remove('open');
      }
    }
  });

  checkoutInput.addEventListener('click', (e) => {
    e.stopPropagation(); 
    let calendar = checkoutInput.querySelector(".calendar");
    if (calendar) {
      
      calendar.classList.toggle("open");
      
      let otherCalendar = checkinInput.querySelector(".calendar");
      if (otherCalendar && otherCalendar.classList.contains('open')) {
        otherCalendar.classList.remove('open');
      }
    }
  });

  document.addEventListener('click', (e) => {
    let calendars = document.querySelectorAll(".calendar.open");
    calendars.forEach(calendar => {
      if (!calendar.contains(e.target) && !checkinInput.contains(e.target) && !checkoutInput.contains(e.target)) {
        calendar.classList.remove('open');
      }
    });
  });

  dayNamesContainer.forEach(day => {
    renderDayNames(day);
  })
  
  renderCalendar(monthYearEl, daysContainer);
});



