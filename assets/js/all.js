"use strict";

// $(function() {
//   console.log('Hello Bootstrap5');
// });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 8,
  grabCursor: true,
  loop: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
  autoplay: {
    delay: 1000
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 5
    // },
    // when window width is >= 480px
    480: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    // when window width is >= 1360px
    1360: {
      slidesPerView: 10,
      spaceBetween: 16
    }
  }
});
var swiper = new Swiper(".feedback-Swiper", {
  // Optional parameters
  autoHeight: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
