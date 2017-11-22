$(document).ready(function() {
    let menuClass = 'menu__trigger_active';

    $('.menu__trigger').on('click touchstart', function(e) {
        e.preventDefault();

        let $this = $(this);
        let $menuLinks = $('.menu__trigger');
        let item = $this.closest('.menu__item');
        let container = item.find('.menu__container');
        let otherContainers =$('.menu__container');
        let desc = $('.menu__desc', container);
        let otherDesc = $('.menu__desc');
        reqwidth = $('.menu__accordeon').outerWidth() - $this.outerWidth() * 3 ;

        if (!$this.hasClass(menuClass)) {
            $menuLinks.removeClass(menuClass); 
            $this.addClass(menuClass);

            otherDesc.fadeOut(50);

            otherContainers.css({
                    'width': 0
                });

            container.css({
              'width': reqwidth
            });
            desc.delay(300).fadeIn(300);

        } else {
            $this.removeClass(menuClass);

            desc.fadeOut(50 , function() {
                container.css({
                  'width' : 0
                });
            });
        }
    }); //click END
}); //ready END


// let menuClass = 'menu__trigger_active';
// let menuLinks = document.getElementsByClassName('menu__trigger');
// let menuIndex ;

// for(let i=0; i<menuLinks.length; i++) {
//     menuLinks[i].addEventListener('click', e => {
//         e.preventDefault();
//         closeAll();

//         if (menuIndex == i) {
//             menuIndex = null;
//             menuLinks[i].classList.remove(menuClass);
//         } else {
//             menuIndex = i;
//             menuLinks[i].classList.add(menuClass);
//         }
//     });
// }

// function closeAll(){
//   for(let j=0; j<menuLinks.length; j++) {
//     menuLinks[j].classList.remove(menuClass);
//   }
// }