let menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    text = document.getElementById('prompt'),
    column = document.getElementsByClassName('.column'),
    circle = document.getElementsByClassName('circle'),
    adv = document.querySelector('.adv'),
    wrapper = document.querySelector('.wrapper');

let li = document.createElement('li');

li.classList.add('menu-item');

menu.appendChild(li);

menuItem = document.getElementsByTagName('li');

menuItem[4].innerHTML = 'Пятый пункт';

console.log(menuItem[4]);

document.body.style.background= 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

console.log(adv);

column[0].removeChild(circle[1]);
// document.body.removeChild(circle[1]);


let question = 'Ваше отношение к техниике Apple- Хорошее';
// let question = prompt('Ваше отношение к техниике Apple', 'Хорошее');

text.textContent = question;
