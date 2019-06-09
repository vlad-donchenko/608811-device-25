if(document.querySelectorAll(".products-slider-wrapper-item").length > 0){

    var slideIndex = 1;

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

    showSlides(slideIndex);
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
            slides[i].classList.add("hidden-slide");

        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" products-slider-dots-active", "");
        }
        slides[slideIndex - 1].classList.remove("hidden-slide");
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

}

/*--modal open*/
var ModalAction = function(openModalClassName, modalClassName, closeModalName) {

    var openModalClassName = document.querySelector(openModalClassName);
    var modalClassName = document.querySelector(modalClassName);
    var closeModalName = document.querySelector(closeModalName);

    openModalClassName.addEventListener("click", function(evt){
        evt.preventDefault();
        modalClassName.classList.add("modal-show");

          if (storageName && !formEmail) {
             formName.value = storageName;
             formEmail.focus();
          }else if(storageEmail && !storageName){
             formEmail.value = storageEmail;
             formName.focus();
          }else if(storageName && storageEmail){
            formName.value = storageName;
            formEmail.value = storageEmail;
            mailText.focus();
          }else{
            formName.focus();
          }
      
    });

    closeModalName.addEventListener("click", function(evt){
        evt.preventDefault();
        modalClassName.classList.remove("modal-show");
        modalClassName.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (modalClassName.classList.contains("modal-show")) {
              modalClassName.classList.remove("modal-show");
              modalClassName.classList.remove("modal-error");
          }
        }
    });
}

ModalAction(".open-modal", ".write-us-modal", ".write-us-close");
ModalAction(".open-map", ".modal-map", ".map-close");


/*---form validation--*/
var formModal = document.querySelector(".write-us-modal");
var form = document.querySelector(".write-us-modal-form");
var formName = document.getElementById("full-name");
var formEmail = document.getElementById("email");
var mailText = document.getElementById("mail-text");


var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

  try {
    storageName = localStorage.getItem("formName");
    storageEmail = localStorage.getItem("formEmail");
  } catch (err) {
    isStorageSupport = false;
  }

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if(!formName.value || !formEmail.value){
      evt.preventDefault();
      formModal.classList.remove("modal-error");
      formModal.offsetWidth = formModal.offsetWidth;
      formModal.classList.add("modal-error");
    }else{
      if (isStorageSupport) {
          localStorage.setItem("formName", formName.value);
          localStorage.setItem("formEmail", formEmail.value);
      }
    }
  });