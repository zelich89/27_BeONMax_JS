// function first() {
// 	//Что-то делаем
// 	setTimeout (function() {
// 		console.log(1);
// 	}, 500)
// }

// function second() {
// 	console.log(2);
	
// }

// first();
// second();

// arr.pop();
// arr.push(6);
// arr.shift();
// arr.unshift(0); 

// for(let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// let arr = ["First", 2, 3, "Fourth", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " массив (" + mass + ')');
// });

// console.log(arr);

// let answer = prompt("", ""),
//     arr = [];

// arr = answer.split(",");

// console.log(arr);

let mass = ['aaa', 'bbbb', "Z"]
    z = mass.join(', ');

    console.log(z);

// let mass = ['aaa', 'bbbb', "Z"]
//     z = mass.sort(', ');

//     console.log(z);

let solider = {
    health: 400,
    armor: 100
};

let john = {
    health: 150
};

john.__proto__ = solider;

console.log(john);
console.log(john.armor);

