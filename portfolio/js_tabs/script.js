window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    /* Объявляем переменные */

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    /* Функции */

    function hideTabContent(a) { // Функция, скрывающая вкладки
        for (let i = a; i < tabContent.length; i++) { // Показываем только первую вкладку
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);


    function showTabContent(b) { // Показываем контент вкладок
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) { // Обработчик событий при клике на вкладку с помощью делегирования
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});