import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import 'swiper/css';

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.brands__slider',
    {
      loop: true,
      freeMode: true,
      spaceBetween: -20,
      slidesPerView: 1.12,
      centeredSlides: true,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        330: {
            spaceBetween: -30,
        },
        340: {
          spaceBetween: -40,
        },
        350: {
            spaceBetween: -50,
        },
        360: {
          spaceBetween: -60,
        },
        370: {
            spaceBetween: -70
        },
        380: {
          spaceBetween: -80,
        },
        390: {
            spaceBetween: -90
        },
        400: {
          spaceBetween: -100,
        },
        410: {
            spaceBetween: -110,
        },
        420: {
          spaceBetween: -120,
        },
        430: {
            spaceBetween: -130,
        },
        440: {
          spaceBetween: -140,
        },
        450: {
            spaceBetween: -150
        },
        460: {
          spaceBetween: -160,
        },
        470: {
            spaceBetween: -170
        },
        480: {
          spaceBetween: -180
        },
        490: {
          spaceBetween: -190
        },
        500: {
          spaceBetween: -200
        },
        510: {
          spaceBetween: -210
        },
        520: {
          spaceBetween: -220
        },
        530: {
          spaceBetween: -230
        },
        540: {
          spaceBetween: -240
        },
        550: {
          spaceBetween: -250
        },
        560: {
          spaceBetween: -260
        },
        570: {
          spaceBetween: -270
        },
        580: {
          spaceBetween: -280
        },
        590: {
          spaceBetween: -290
        },
        600: {
          spaceBetween: -300
        },
        610: {
          spaceBetween: -310
        },
        620: {
          spaceBetween: -320
        },
        630: {
          spaceBetween: -330
        },
        640: {
          spaceBetween: -340
        },
        650: {
          spaceBetween: -350
        },
        660: {
          spaceBetween: -360
        },
        670: {
          spaceBetween: -370
        },
        680: {
          spaceBetween: -380
        },
        690: {
          spaceBetween: -390
        },
        700: {
          spaceBetween: -400
        },
      }
    },
);

  

  resizableSwiper(
    '(max-width: 768px)',
    '.devices__slider',
    {
      loop: true,
      spaceBetween: -20,
      slidesPerView: 1.12,
      centeredSlides: true,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        330: {
            spaceBetween: -30,
        },
        340: {
          spaceBetween: -40,
        },
        350: {
            spaceBetween: -50,
        },
        360: {
          spaceBetween: -60,
        },
        370: {
            spaceBetween: -70
        },
        380: {
          spaceBetween: -80,
        },
        390: {
            spaceBetween: -90
        },
        400: {
          spaceBetween: -100,
        },
        410: {
            spaceBetween: -110,
        },
        420: {
          spaceBetween: -120,
        },
        430: {
            spaceBetween: -130,
        },
        440: {
          spaceBetween: -140,
        },
        450: {
            spaceBetween: -150
        },
        460: {
          spaceBetween: -160,
        },
        470: {
            spaceBetween: -170
        },
        480: {
          spaceBetween: -180
        },
        490: {
          spaceBetween: -190
        },
        500: {
          spaceBetween: -200
        },
        510: {
          spaceBetween: -210
        },
        520: {
          spaceBetween: -220
        },
        530: {
          spaceBetween: -230
        },
        540: {
          spaceBetween: -240
        },
        550: {
          spaceBetween: -250
        },
        560: {
          spaceBetween: -260
        },
        570: {
          spaceBetween: -270
        },
        580: {
          spaceBetween: -280
        },
        590: {
          spaceBetween: -290
        },
        600: {
          spaceBetween: -300
        },
        610: {
          spaceBetween: -310
        },
        620: {
          spaceBetween: -320
        },
        630: {
          spaceBetween: -330
        },
        640: {
          spaceBetween: -340
        },
        650: {
          spaceBetween: -350
        },
        660: {
          spaceBetween: -360
        },
        670: {
          spaceBetween: -370
        },
        680: {
          spaceBetween: -380
        },
        690: {
          spaceBetween: -390
        },
        700: {
          spaceBetween: -400
        },
      }
    },
  );

  resizableSwiper(
    '(max-width: 768px)',
    '.prices__slider',
    {
      loop: true,
      spaceBetween: -20,
      slidesPerView: 1.12,
      centeredSlides: true,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        330: {
            spaceBetween: -30,
        },
        340: {
          spaceBetween: -40,
        },
        350: {
            spaceBetween: -50,
        },
        360: {
          spaceBetween: -60,
        },
        370: {
            spaceBetween: -70
        },
        380: {
          spaceBetween: -80,
        },
        390: {
            spaceBetween: -90
        },
        400: {
          spaceBetween: -100,
        },
        410: {
            spaceBetween: -110,
        },
        420: {
          spaceBetween: -120,
        },
        430: {
            spaceBetween: -130,
        },
        440: {
          spaceBetween: -140,
        },
        450: {
            spaceBetween: -150
        },
        460: {
          spaceBetween: -160,
        },
        470: {
            spaceBetween: -170
        },
        480: {
          spaceBetween: -180
        },
        490: {
          spaceBetween: -190
        },
        500: {
          spaceBetween: -200
        },
        510: {
          spaceBetween: -210
        },
        520: {
          spaceBetween: -220
        },
        530: {
          spaceBetween: -230
        },
        540: {
          spaceBetween: -240
        },
        550: {
          spaceBetween: -250
        },
        560: {
          spaceBetween: -260
        },
        570: {
          spaceBetween: -270
        },
        580: {
          spaceBetween: -280
        },
        590: {
          spaceBetween: -290
        },
        600: {
          spaceBetween: -300
        },
        610: {
          spaceBetween: -310
        },
        620: {
          spaceBetween: -320
        },
        630: {
          spaceBetween: -330
        },
        640: {
          spaceBetween: -340
        },
        650: {
          spaceBetween: -350
        },
        660: {
          spaceBetween: -360
        },
        670: {
          spaceBetween: -370
        },
        680: {
          spaceBetween: -380
        },
        690: {
          spaceBetween: -390
        },
        700: {
          spaceBetween: -400
        },
      }
    },
  );
});



