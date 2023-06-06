const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      520: {
        slidesPerView: 1,
      }
    }
});  

const burgerButton = document.querySelector('.header__burger'),
      header = document.querySelector('.header');

      
burgerButton.addEventListener('click', (e) => {
  header.classList.toggle('open');
})