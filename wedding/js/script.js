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
