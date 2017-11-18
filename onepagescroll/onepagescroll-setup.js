$(document).ready(function() {

        $(".maincontent").onepage_scroll({
       sectionContainer: "section", // контейнер, к которому будет применяться скролл
       easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
       animationTime: 800, // время анимации
       pagination: true, // скрыть или отобразить пагинатор
       updateURL: false // обновлять URL или нет

    });
    // $(window).on('scroll', function(e) {
        // e.preventDefault();

        // let $this = $(this);
        // let onepage = $('.onepage')
        // let maincontent = $('.maincontent');
        // let items = maincontent.find('.section');
        // let activeSlide = items.filter('.section__active');
        // let existedItem, edgeItem, reqItem;

        // console.log(e);
        // if ($this.hasClass('slider__arrow-right')) {
        //     existedItem = activeSlide.next();
        //     edgeItem = items.first();
        // } 

        // if ($this.hasClass('slider__arrow-left')) {
        //     existedItem = activeSlide.prev();
        //     edgeItem = items.last();
        // } 

    //     if (existedItem.length) {
    //         showSlide(existedItem.index());
    //     } else {
    //         showSlide(edgeItem.index())
    //     }

    // }); //scroll END


    // function showSlide(reqIndex) {
    //     let maincontent = $('.maincontent');
    //     let items = maincontent.find('.section');
    //     let activeSlide = items.filter('.section__active');
    //     let reqItem = $(items[reqIndex]);

    //     if (reqIndex >= 0) {

    //         maincontent.animate({
    //             'top' : -reqIndex * 100 + '%'
    //         }, 400, function() {
    //             activeSlide.removeClass('.section__active');
    //             reqItem.addClass('.section__active');
    //         });


            


    //     }
    // }

}); //ready END