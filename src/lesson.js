import './lesson.html';
import './lesson.scss';


$('.slider__list').slick({
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.slider__prev'),
  nextArrow: $('.slider__next'),
});