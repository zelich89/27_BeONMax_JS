let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
console.log(btn);
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
document.body.removeChild(circle[1]); 
// wrapper.removeChild(heart[1]);

// document.body.replaceChild(btn[1], circle[1]);

// console.log(div);
// console.log(text);
