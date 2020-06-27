let btn = document.querySelectorAll('button');

// btn[0].onclick = (function() {
//     alert('Hello');
// });

// btn[0].onclick = (function() {
//     alert('Hello2');
// });

// btn[0].addEventListener('click', function(event) {
    // let target = event.target;
    // target.style.display = 'none';
    // console.log('Произошло событие : ' + event.type + ' на эллементе ' + event.target);
    
// });

// btn[0].addEventListener('mouseout', function() {
//     alert('Mouse');
// });
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function(event) {
        console.log('Вывелось');
        
    });
    
});