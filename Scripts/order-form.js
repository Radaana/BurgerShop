$(document).ready(function() {
    $('#orderform').on('submit', function(e){
        e.preventDefault();

        let form = $(e.target);
        let url = form.attr('action');
        let data = form.serialize();
        // console.log(data);

        let request = $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        });

        request.done(function(msg) {
            let mes = msg.mes;
            let status = msg.status;
            
            if (status === 'OK') {
                console.log('ok');
                $('.form__modal-bg').fadeIn(400, 
                    function(){ 
                        $('.form__modal_success') 
                        .css('display', 'block') 
                        .animate({opacity: 1, top: '40%'}, 200);
                    });

            } else {
                console.log('not ok');
                $('.form__modal-bg').fadeIn(400, 
                    function(){ 
                        $('.form__modal_fail') 
                        .css('display', 'block') 
                        .animate({opacity: 1, top: '40%'}, 200);
                    });
            };
        }); // done END

        
        request.fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

        request.always(function() {
            console.log('aga');
            form[0].reset();
        });
        
    });//submit END

    $('.form__close, .form__modal-bg').on('click touchstart', function(e){ 
        e.preventDefault();
        $('.form__modal_success, .form__modal_fail').animate({opacity: 0, top: '35%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $('.form__modal-bg').fadeOut(400); 
                }
            );
    });
});// ready END



    // $('.opinion__btn').on('click touchstart', function(e){ 
    //     e.preventDefault(); 
    //     $('.modal-bg').fadeIn(400, 
    //         function(){ 
    //             $('.modal') 
    //                 .css('display', 'block') 
    //                 .animate({opacity: 1, top: '40%'}, 200);
    //     });
    // });
    
    // $('#modal_close, .modal-bg').on('click touchstart', function(e){ 
    //     e.preventDefault();
    //     $('.modal').animate({opacity: 0, top: '35%'}, 200,  
    //             function(){ 
    //                 $(this).css('display', 'none'); 
    //                 $('.modal-bg').fadeOut(400); 
    //             }
    //         );
    // });