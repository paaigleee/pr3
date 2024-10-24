$(document).ready(function(){
  $('.one__single-item').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:1000
  });

  $('.two__single-item').slick({
    
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed:1300,
    fade: true,
    cssEase: 'linear'
  });

  $('.three__single-item').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:1000
  });
});
const up = document.querySelector(".pageup");

window.addEventListener("scroll", trackScroll);
up.addEventListener("click", upper);

function trackScroll() {
    const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    up.classList.add("pageup--show");
  } else {
    // иначе исчезает
    up.classList.remove("pageup--show");
  }
}

function upper() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -75);
  }
}
