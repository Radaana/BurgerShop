$(document).ready(function() {
    let teamClass = 'teammates__trigger_active';



    $('.teammates__trigger').on('click', function(e) {
        e.preventDefault();

        let $this = $(this);
        let $teamLinks = $('.teammates__trigger');
        let content = $this.closest('.teammates__desc');
        let otherContent =$('.teammates__desc');
        let $teamDesc = $('.teammates__desc');

        // console.log($this);
        if (!$this.hasClass(teamClass)) {
           $teamLinks.removeClass(teamClass); 
           $(this).addClass(teamClass);

           // otherContent.stop().slideUp(300);
           // content.stop().slideDown(300);
        } else {

        //     content.stop().slideUp(300);
            $this.removeClass(teamClass);
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