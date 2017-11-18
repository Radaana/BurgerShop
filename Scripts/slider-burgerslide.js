$(document).ready(function() {

    $('.slider__arrow').on('click', function(e) {
        e.preventDefault();

        let $this = $(this);
        let container = $this.closest('.slider');
        let items = container.find('.slider__main');
        let activeSlide = items.filter('.slider__main-active');
        let existedItem, edgeItem, reqItem;

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
            activeSlide.removeClass('slider__main-active');
            reqItem.addClass('slider__main-active');
        }
    }

}); //ready END