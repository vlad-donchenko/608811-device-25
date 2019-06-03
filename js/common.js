var slideIndex = 1;
showSlides(slideIndex);

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Основная функция слайдера 

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("products-slider-wrapper-item");
    var dots = document.getElementsByClassName("products-slider-dots-item");
    
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" products-slider-dots-active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " products-slider-dots-active";
}

var slideIndex_info = 1;

showSlides__info(slideIndex_info);

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide__info() {
    showSlides__info(slideIndex_info += 1);
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide__info() {
    showSlides__info(slideIndex_info -= 1);  
}

// Устанавливает текущий слайд
function currentSlide__info(n) {
   showSlides__info(slideIndex_info = n);
}

// Основная функция слайдера 
function showSlides__info(n) {
    var i;
    var slides = document.getElementsByClassName("information-slider-item");
    var dots = document.getElementsByClassName("information-slider-dots-item");
    
    if (n > slides.length) {
        slideIndex_info = 1;
    }
    if (n < 1) {
        slideIndex_info = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" information-slider-dots-active", "");
    }
    slides[slideIndex_info - 1].style.display = "flex";
    dots[slideIndex_info - 1].className += " information-slider-dots-active";
}

