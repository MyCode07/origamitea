import { Swiper, Navigation, Pagination } from "swiper";

const heroSlider = document.querySelector('.hero .swiper');
const heroSlides = document.querySelectorAll('.hero .swiper-slide');
if (heroSlides.length) {
    new Swiper(heroSlider, {
        modules: [Pagination],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 1000,

        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: false
        },
        watchSlidesProgress: true,
        watchOverflow: true,
        grabCursor: true,

        pagination: {
            el: '.hero__pagination',
            clickable: true,
        }
    })
}