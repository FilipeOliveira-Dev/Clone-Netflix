// SWIPE CARD DE
new Swiper('.swiper', {
    mousewheel: {
        forceToAxis: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 5
        },
    }
});