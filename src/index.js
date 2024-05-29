import './index.html';
import './style.scss';
$('.major__slider-wrapper').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  zIndex:0,
  prevArrow: $('.major__prev'),
  nextArrow: $('.major__next'),
});
$('.experts__slider_wrapper').slick({
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  slidesToShow:4,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.experts__prev'),
  nextArrow: $('.experts__next'),
});
$('.idea__slider_wrapper').slick({
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.idea__prev'),
  nextArrow: $('.idea__next'),
});
$('.news__slider_wrapper').slick({
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  slidesToShow:3,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.news__prev'),
  nextArrow: $('.news__next'),
});

$('.support__stategic__wrapper').slick({
  infinite: true,
  speed: 8000,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 0,
});
$('.support__info_wrapper').slick({
  infinite: true,
  speed: 8000,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 0,
  rtl:true
});

$('.header__burger').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
})