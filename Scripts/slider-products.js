$(document).ready(function() {

$('.slider__button').on('click', e => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let composition = $('.slider__composition', $this);
    let main = $this.closest('.slider__main');
    let products = $('.slider__products', main);

    console.log(products);

    composition.toggleClass('slider__composition_active');
    products.toggleClass('slider__products_shown');
    
    }); //click END

$('.close__link_slider').on('click', e => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let main = $this.closest('.slider__main');
    let composition = $('.slider__composition', main);
    let products = $('.slider__products', main);

    composition.toggleClass('slider__composition_active');
    products.toggleClass('slider__products_shown');

    }); //click END

}); //ready END







// let button = document.getElementById('slider__button');
// let composition = document.getElementById('slider__composition');
// let products = document.getElementById('slider__products');
// let sliderClose = document.getElementById('slider__close');


// button.addEventListener('click', e => {
//     e.preventDefault();
//     composition.classList.toggle('slider__composition_active');
//     products.classList.toggle('slider__products_shown')
// });

// sliderClose.addEventListener('click', e => {
//     e.preventDefault();
//     composition.classList.toggle('slider__composition_active');
//     products.classList.toggle('slider__products_shown')
// });

