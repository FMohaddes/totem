$(function () {
  $('.toggle-menu').click(function(){
    $('.exo-menu').toggleClass('display');

  });

});



let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

let swiperB = new Swiper(".mySwiperBullet", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let swiperN = new Swiper(".mySwiperNashr", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
var swiperR = new Swiper('.ravankavi-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  // autoHeight: true,
  pagination: {
    el: '.ravankavi-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }
});
