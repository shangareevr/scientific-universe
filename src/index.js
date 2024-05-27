import './index.html';
import './style.scss';
$('.major__slider-wrapper').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  prevArrow: $('.major__prev'),
  nextArrow: $('.major__next'),
  responsive:[
    {
      breakpoint: 701,
      settings: {
        dots: true,
        dotsClass: 'major-slide__dots',
      }
    }
  ]
});