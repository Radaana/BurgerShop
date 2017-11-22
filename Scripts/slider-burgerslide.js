$(document).ready(function() {

    $('.slider__arrow').on('click touchstart', function(e) {
        e.preventDefault();

        let $this = $(this);
        let container = $this.closest('.slider');
        let items = container.find('.slider__main');
        let activeSlide = items.filter('.slider__main-active');
        let existedItem, edgeItem, reqItem;
        items.first().removeClass('slider__main-first');

        if ($this.hasClass('slider__arrow-right')) {
            existedItem = activeSlide.next();
            edgeItem = items.first();
        } 

        if ($this.hasClass('slider__arrow-left')) {
            existedItem = activeSlide.prev();
            edgeItem = items.last();
        } 

        if (existedItem.length) {
            showSlide(container, existedItem.index());
        } else {
            showSlide(container, edgeItem.index())
        }

    }); //click END


    function showSlide(container, reqIndex) {

        let items = container.find('.slider__main');
        let activeSlide = items.filter('.slider__main-active');
        let reqItem = $(items[reqIndex]);


        if (reqIndex >= 0) {
            activeSlide.animate({'opacity' : 0 },250 , () => {activeSlide.removeClass('slider__main-active')});
            // activeSlide.removeClass('slider__main-active').css({'opacity' : 0 });
            reqItem.addClass('slider__main-active').animate({'opacity' : 1 }, 500);
            // activeSlide.animate({'opacity' : 0 },400 , () => {activeSlide.removeClass('slider__main-active')});
            // reqItem.animate({'opacity' : 1 }, 400 , () => {reqItem.addClass('slider__main-active')});
        }
    }

}); //ready END