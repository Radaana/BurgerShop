$(document).ready(function() {
    $('.opinion__btn').click( function(e){ 
        e.preventDefault(); 
        $('.modal-bg').fadeIn(400, 
            function(){ 
                $('.modal') 
                    .css('display', 'block') 
                    .animate({opacity: 1, top: '40%'}, 200);
        });
    });
    
    $('#modal_close, .modal-bg').click( function(e){ 
        e.preventDefault();
        $('.modal').animate({opacity: 0, top: '35%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $('.modal-bg').fadeOut(400); 
                }
            );
    });
});