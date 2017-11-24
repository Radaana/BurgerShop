$(document).ready( function() {
    let maincontent = $('.maincontent');
    let sections = $('.section');

    let inScroll = false;

    let mobileDetect = new MobileDetect(window.navigator.userAgent);
    let isMobile = mobileDetect.mobile();

    let fullscreen = $('#fullscreen');
    let ham = $('#hamburger-menu');

// Функции

    function switchDotsClass(sectionNum) {
        $('.dots__link').removeClass('dots__link_active');
        $('.dots__link').eq(sectionNum).addClass('dots__link_active');
    }; // switchDotsClass


    function performMovingSections(sectionNum) {
        if (inScroll) return
        inScroll = true

        let position = (sectionNum * -100) + '%';

        maincontent.animate({
                'top' : -sectionNum * 100 + '%'
            }, 1000)

        sections.eq(sectionNum).addClass('section__active')
        .siblings().removeClass('section__active');

        

        setTimeout(() => {
            inScroll = false;
            switchDotsClass(sectionNum);
            }, 1300);
        }

    function defineSections(sections) {
        let activeSection = sections.filter('.section__active');
            return {
                activeSection: activeSection,
                nextSection: activeSection.next(),
                prevSection: activeSection.prev()
            }
        }

    function scrollToSection(direction) {
        let section = defineSections(sections)

        if (inScroll) return;

        if (direction === 'up' && section.nextSection.length) { // вниз
            performMovingSections(section.nextSection.index())
        }

        if (direction === 'down' && section.prevSection.length) { // вверх
            performMovingSections(section.prevSection.index())
        }
    }

//  События

    $('.wrapper').on({
        wheel: e => {
            let deltaY = e.originalEvent.deltaY;
            let direction; 
            if (deltaY > 0) {
                direction = 'up'
            } else {
                direction = 'down'
            }

            scrollToSection(direction);
        }, 
        touchmove: e => {
            e.preventDefault()
        }
    }); // wheel + touchmove END


    $(document).on('keydown', e => {
        let section = defineSections(sections);

        if (inScroll) return

        switch (e.keyCode) {
            case 40: // вверх
                if (!section.nextSection.length) return;
                performMovingSections(section.nextSection.index());
                break;

            case 38: //вниз
                if (!section.prevSection.length) return;
                performTransition(section.prevSection.index());
                break;
            }
    }); // keydown END

    if (isMobile) {
        $(window).swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            console.log(direction);
            scrollToSection(direction);
            }
        }) // swipe END
    }


$('[data-scroll-to]').on('click touchstart', e => {
  e.preventDefault();
  let target = $(e.currentTarget);
  let sectionIndex = parseInt(target.attr('data-scroll-to'));

    fullscreen.removeClass('fullscreen_shown'); // fullsize menu
    ham.removeClass('hamburger-menu-active');//ham ico

  performMovingSections(sectionIndex);
});


    // function showSlide(reqIndex) {
    // //     let maincontent = $('.maincontent');
    // //     let items = maincontent.find('.section');
    // //     let activeSlide = items.filter('.section__active');
    // //     let reqItem = $(items[reqIndex]);

    //     if (reqIndex >= 0) {
    //         maincontent.animate({
    //             'top' : -reqIndex * 100 + '%'
    //         }, 400, function() {
    //             sections.filter('.section__active').removeClass('.section__active');
    //             sections.eq(reqIndex).addClass('.section__active');
    //         });

}); // ready END










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

// }); //ready END