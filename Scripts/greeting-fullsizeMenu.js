let hamburger = document.getElementById('hamburger-menu');
let fullscreen = document.getElementById('fullscreen');
let close = document.getElementById('close');

hamburger.addEventListener('click', e => {
    e.preventDefault();
    fullscreen.classList.add('fullscreen_shown');
});

close.addEventListener('click', e => {
    e.preventDefault();
    fullscreen.classList.remove('fullscreen_shown');
});