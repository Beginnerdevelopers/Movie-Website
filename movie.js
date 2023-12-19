var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//swiper
var swiper = new Swiper(".coming_container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPreView: 2,
    },
    568: {
      slidesPreView: 3,
    },
    768: {
      slidesPreView: 4,
    },

    968: {
      slidesPreView: 5,
    },
  },
});
