const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
    output.textContent = input.value;
});