import './results.html';
import './results.scss';

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
$('.winner__wrapper').each(function() {
	let ths = $(this);
	ths.find('.winner__list').not(':first').hide();
	ths.find('.winner__border').click(function() {
		ths.find('.winner__border').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.winner__list').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

$('.tab__item').not(':first').hide();


const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
$('.__select__content').hide();
// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    $('.select__content').hide();
  } else {
    selectSingle.setAttribute('data-state', 'active');
    $('.select__content').show().css('display','flex');
  }
});

const tabs = document.querySelectorAll('.tab__item');
selectSingle_labels.forEach((label,index)=>{
  label.addEventListener('click', e=>{
    selectSingle_title.textContent = e.target.textContent;
    document.querySelector('.res__date').textContent = `${e.target.textContent}`+'a';
    selectSingle.setAttribute('data-state', '');
    $('.select__content').hide();
    tabs.forEach((tab, idx)=>{
      $(tab).hide();
      if(idx === index){
        $(tab).show()
      }
    })
  })
})