function hello() {
    console.log("Hello world");
}

hello();

function hi() {
    console.log("Hello world");
}

hi();

let  arr = [1, 15, 4, 30, 42],
     i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);
