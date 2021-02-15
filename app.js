const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const style = event.target.classList;
        if (style.contains('decrease')) {
            count--;
        }
        else if (style.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count > 0){
            value.style.color = 'green';
        }
        if (count === 0){
            value.style.color = 'black';
        }
        value.innerText = count;
    })
})