$(document).ready(function() {
    let teamClass = 'teammates__trigger_active';

    $('.teammates__trigger').on('click touchstart', function(e) {
        e.preventDefault();

        let $this = $(this);
        let $teamLinks = $('.teammates__trigger');
        let item = $this.closest('.teammates__item');
        let container = item.find('.teammates__container');
        let otherContainers =$('.teammates__container');
        let desc = $('.teammates__desc', container);
        let reqHeight = desc.outerHeight();

        if (!$this.hasClass(teamClass)) {
           $teamLinks.removeClass(teamClass); 
           $this.addClass(teamClass);

           otherContainers.css({
            'height': 0
          });

            container.css({
              'height': reqHeight
            });

        } else {
            $this.removeClass(teamClass);
            container.css({
              'height' : 0
            });
        }
    }); //click END
}); //ready END


// let teamClass = 'teammates__trigger_active';
// let teamLinks = document.getElementsByClassName('teammates__trigger');
// let teamIndex ;



// for(let i=0; i<teamLinks.length; i++) {
//     teamLinks[i].addEventListener('click', e => {
//         e.preventDefault();
//         closeAll();

//         if (teamIndex == i) {
//             teamIndex = null;
//             teamLinks[i].classList.remove(teamClass);
//         } else {
//             teamIndex = i;
//             teamLinks[i].classList.add(teamClass);
//         }
//     });
// }

// function closeAll(){
//   for(let j=0; j<teamLinks.length; j++) {
//     teamLinks[j].classList.remove(teamClass);
//   }
// }