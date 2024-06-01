import './novosti.html';
import './novosti.scss';
$('.header__burger').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
})
$('.article__show').click(function(){
    $('.article__wrapper').addClass('active');
    $(this).hide();
})