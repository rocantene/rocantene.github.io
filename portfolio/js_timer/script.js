window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    /* Объявляем переменные */

    let deadLine = '2019-12-31'; // Время, до которого таймер отсчитывает

    /* Функции */

    function getTimeRemaining(endtime) { // Функция,  считающая "сейчас" и конецом отсчета
        let t = Date.parse(endtime) - Date.parse(new Date()), // Помещаем разницу между датами в милесикундах
            seconds = Math.floor((t / 1000) % 60), // переменная секунды (целые числа с остатком для 60)
            minutes = Math.floor((t / 1000 / 60) % 60), // переменная минуты (целые числа с остатком для 60)
            hours = Math.floor((t/ (1000 * 60 * 60))); // переменная часы (количество целых часов)
            // hoursTwo = Math.floor((t / 1000 / 60 / 60) % 24); // переменная для дней через часы  (целые числа с остатком для 24)
            // days = Math.floor((t/ (1000 * 60 * 60 * 24))); // переменная для дней

        return { // возвращаем результат в виде объекта
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) { // Функция, подставляющая значение в  DOM
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // Запускаем функцию каждую секунду

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours; // Достаем значения из объекта
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) { // Проверка даты
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

});