const button = document.getElementById('btn')
const content = document.getElementById('content')
var flag = 0;

button.addEventListener('click', () => {
    if (flag == 0) {
        content.style.top = 0;
        content.style.position = 'relative';
        flag++;
    } else {
        content.style.top = -340 + 'px';
        content.style.position = 'absolute';
        flag--;
    }
})

console.log(button)