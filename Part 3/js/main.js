let btn = document.getElementById('btn'),
    box = document.querySelector('.blue');

function myAnimation() {
    console.log('click');
    
    let pos = 0;

    let id =  setInterval(frame,10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let block = document.querySelector('.line'),
    btns = document.getElementsByTagName('button');

block.addEventListener('click', function(event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Click');
    } else {
        console.log('Not');
        
    }
});