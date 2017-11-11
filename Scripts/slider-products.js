let button = document.getElementById('slider__button');
let composition = document.getElementById('slider__composition');
let products = document.getElementById('slider__products');
let sliderClose = document.getElementById('slider__close');


button.addEventListener('click', e => {
    e.preventDefault();
    composition.classList.toggle('slider__composition_active');
    products.classList.toggle('slider__products_shown')
});

sliderClose.addEventListener('click', e => {
    e.preventDefault();
    composition.classList.toggle('slider__composition_active');
    products.classList.toggle('slider__products_shown')
});

