var swiper = new Swiper(".swiper", {
    slidesPerView: 4, // Default value for larger screens
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When the screen width is >= 320px
      320: {
        slidesPerView: 1.5, // Show 1 slide on very small screens
        spaceBetween: 10,
      },
      524: {
        slidesPerView: 2, // Show 1 slide on very small screens
        spaceBetween: 10,
      },
      690: {
        slidesPerView: 2.5, // Show 1 slide on very small screens
        spaceBetween: 10,
      },
      // When the screen width is >= 768px
      768: {
        slidesPerView: 3, // Show 2 slides on tablets
        spaceBetween: 20,
      },
      901: {
        slidesPerView: 3.5, // Show 2 slides on tablets
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3.5, // Show 2 slides on tablets
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4, // Show 2 slides on tablets
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4.5, // Show 2 slides on tablets
        spaceBetween: 20,
      },
      
      // When the screen width is >= 1024px
      1500: {
        slidesPerView: 5, // Show 3 slides on small desktops
        spaceBetween: 30,
      },
      // When the screen width is >= 1440px
      1440: {
        slidesPerView: 4, // Show 4 slides on large desktops
        spaceBetween: 30,
      },
    },
  });
  
  // Adding slides dynamically
  var appendNumber = 4;
  var prependNumber = 1;
  /*
  document.querySelector(".append-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(`<div class="swiper-slide">Slide ${++appendNumber}</div>`);
  });
  
  document.querySelector(".prepend-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(`<div class="swiper-slide">Slide ${--prependNumber}</div>`);
  });
  */