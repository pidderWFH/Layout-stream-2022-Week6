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
    delay: 1000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 5,
      spaceBetween: 12
    },
    // when window width is >= 992px
    1200: {
      slidesPerView: 9,
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
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper(".course-Swiper", {
  // Optional parameters
  // autoHeight: true,
  autoHeight: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 16,
  grabCursor: true,
  mousewheel: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
  // autoplay: {
  //   delay: 3000,
  // },
  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});
AOS.init();