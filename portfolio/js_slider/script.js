//Slider

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    /* Объявляем переменные */

    let slideIndex = 1, // Параметр текущего слайда
        slides = document.querySelectorAll('.slider-item'), // Слайдеры
        prev = document.querySelector('.prev'), // Элемент навигации вперед
        next = document.querySelector('.next'), // Элемент навигации назад
        dotsWrap = document.querySelector('.slider-dots'), // Обертка точек-переключателя
        dots = document.querySelectorAll('.dot'); // Все точки-переключатели

    /* Функции */

    showSlides(slideIndex); // Функция показывающая тот слайд, который мы ей передаем. Остальные слайды скрываем. + точки-переключатели
    function showSlides(n) {
        if (n > slides.length) { // Проверка колличества слайдов. Возврашаемся к первому
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length; // Обратная проверка. Возвращаемся к последнему слайду
        }
        slides.forEach((item) => item.style.display = 'none'); // Скрываем каждый слайд
        // Устаревший способ перебора с помощью цикла
        // for (let i = 0; i < slides.length; i++){
        //     slides[i].style.display = 'none';
        // }

        dots.forEach((item) => item.classList.remove('dot-active')); // Убираем класс active с точек-переключателей
        slides[slideIndex - 1].style.display = 'block'; // Показываем первый слайд
        dots[slideIndex - 1].classList.add('dot-active'); // Показываем активную точку-переключатель
    }

    function plusSlides(n) { // Функция, увелечивающая slideIndex при переключении
        showSlides(slideIndex += n); // Узнаем новое значении функции showSlides
    }

    function currentSlide(n) { // Функция, определяющая текущий слайд
        showSlides(slideIndex = n); // Узнаем новое значении функции showSlides
    }

    prev.addEventListener('click', function () { // Функция работы со стрелкой назад
        plusSlides(-1);
    });
    next.addEventListener('click', function () { // Функция работы со стрелкой вперед
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) { // Функция работы с точками-переключателя
        for (let i = 0; i < dots.length +1; i++){ // Изменяем индекс 0
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){ // Делегирование события: Проверяем элемент на который мы кликнули, узнаем номер точки
            currentSlide(i);
            }
        }
    });
});