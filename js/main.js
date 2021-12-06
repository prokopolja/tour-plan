$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    // Управление клавиатурой
      keyboard: true,
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    // Управление клавиатурой
    keyboard: true,
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });
  var modalButton = $('[data-toggle=modal]');
  var closemodalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closemodalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault('');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  // Обработка форм
  $('.form').each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не короче 2 букв",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
        },
      },
    });
  })

  //Формат номера тлф
  $(document).ready(function(){
    $('#phone').mask('+7 (999) 999-99-99');
  });
  $(document).ready(function(){
    $('#phone-number').mask('+7 (999) 999-99-99');
  });


});