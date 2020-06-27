// 'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById('title'),
    text = document.getElementById('prompt'),
/**/column = document.getElementsByClassName('.column'),
    adv = document.getElementsByClassName('adv')[0],
    li = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

li.classList.add('menu-item');                                  // Добавляем новый li, с классом и текстом
li.textContent = 'Пятый пункт';
menu.appendChild(li);

document.body.style.background= 'url(img/apple_true.jpg) center no-repeat'; // Меняем фон
// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  

title.textContent = 'Мы продаем только подлинную технику Apple';   // Заменить текст

adv.remove();                                                      // Удалить рекламу

let question = 'Ваше отношение к техниике Apple- Не особо';              // Отношение к Apple
// let question = prompt('Ваше отношение к техниике Apple', 'Не особо');
text.textContent = question;
