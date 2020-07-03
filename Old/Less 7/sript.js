// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);


// function coloring () {
    // box.style.backgroundColor = 'green';

    // btn[1].style.borderRadius = "50%";
  
    // circle[0].style.backgroundColor = 'red';
    // circle[1].style.backgroundColor = 'yellow';
    // circle[2].style.backgroundColor ='green';

    // for (let i = 0; i < heart.length; i++) {
    //     heart[i].style.backgroundColor = 'blue';
    // }

    // heart.forEach(function(item, i, hearts) {
    //     item.style.backgroundColor = 'blue';
    // });
// };

// setTimeout(coloring,2000);

// let div = document.createElement('div'),
//     text = document.createTextNode('тут был я');

// div.classList.toggle('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h2>Hellow world!</h2>';
// div.textContent= 'Hellow world!';

// document.body.insertBefore(div,circle[0]);
// document.body.removeChild(circle[1]); 
// wrapper.removeChild(heart[1]);

// document.body.replaceChild(btn[1], circle[1]);

// console.log(div);
// console.log(text);
// let options = [1,3,4,5,1];
// // let options = {
// //     width: 1024,
// //     height: 1024,
// //     name: 'Viktod'
// // };

// options.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + ' в ' + mass);
// });
var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// снова предполагаем, что функция печати определена
console.log('stringArray:', stringArray.join());
console.log('Сортировка:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Сортировка без функции сравнения:', numberArray.sort());
console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Сортировка без функции сравнения:', numericStringArray.sort());
console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));