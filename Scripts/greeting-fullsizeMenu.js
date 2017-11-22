$(document).ready(function() { 
        let fullscreen = $('#fullscreen');
        let ham = $('#hamburger-menu');

    ham.on('click touchstart', e =>{
        e.preventDefault();
        fullscreen.addClass('fullscreen_shown');
        ham.addClass('hamburger-menu-active');
    }); //click END

    $('#close').on('click touchstart', e =>{
        e.preventDefault();
        fullscreen.removeClass('fullscreen_shown');
        ham.removeClass('hamburger-menu-active');
    }); //click END

}); //ready END

// let hamburger = document.getElementById('hamburger-menu');
// let fullscreen = document.getElementById('fullscreen');
// let close = document.getElementById('close');

// hamburger.addEventListener('click', e => {
//     e.preventDefault();
//     fullscreen.classList.add('fullscreen_shown');
// });

// close.addEventListener('click', e => {
//     e.preventDefault();
//     fullscreen.classList.remove('fullscreen_shown');
// });