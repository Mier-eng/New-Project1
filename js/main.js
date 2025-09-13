let burger = document.querySelector('.burger_btn');
burger.onclick = function() {
    this.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger_btn');
    const nav = document.querySelector('.nav');

    burgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        burgerBtn.classList.toggle('active'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu__link');
  const headerHeight = document.querySelector('.header').offsetHeight; // Получаем высоту шапки

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const targetId = this.getAttribute('href').substring(1); // Получаем ID элемента, к которому нужно прокрутить
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight; // Вычисляем позицию элемента с учетом высоты шапки

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Добавляем плавность
        });
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu__link');
  const burgerBtn = document.querySelector('.burger_btn');
  const menu = document.querySelector('.menu');



  // Обработчик кликов по ссылкам меню
  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const target = this.getAttribute('href'); // Получаем значение атрибута href (например, "#About")
      scrollToSection(target); // Вызываем функцию прокрутки к разделу

    });
  });


});
