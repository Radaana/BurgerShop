$(document).ready(function() {
    $('.opinion__btn').on('click touchstart', function(e){ 
        e.preventDefault(); 
        $('.modal-bg').fadeIn(400, 
            function(){ 
                $('.modal') 
                    .css('display', 'block') 
                    .animate({opacity: 1, top: '40%'}, 200);
        });
    });
    
    $('#modal_close, .modal-bg').on('click touchstart', function(e){ 
        e.preventDefault();
        $('.modal').animate({opacity: 0, top: '35%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $('.modal-bg').fadeOut(400); 
                }
            );
    });
});