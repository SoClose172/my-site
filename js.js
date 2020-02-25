console.log('Привет от JavaScript!');
let page = document.querySelector('.page');
let button = document.querySelector('.button-switch');




button.onclick = function () {
    // toggle меняют значение на противоположное и наборот , работает как FlipFlop
    page.classList.toggle('light-page');
    page.classList.toggle('dark-page');

}
