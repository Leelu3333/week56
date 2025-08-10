import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.1,
      spaceBetween: 24,
      breakpoints: {
    
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3.5,
    }    
  }
});

var indexswiper = new Swiper(".index-Swiper", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  breakpoints: {
    
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.9,
      spaceBetween: 24,
    },
  }
});
