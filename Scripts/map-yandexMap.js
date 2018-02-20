$(document).ready(function() {

    ymaps.ready(init);
    var myMap, burger1, burger2, burger3, burger4;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [59.939095, 30.315868],
            zoom: 11
        });

        var burger1 = new ymaps.Placemark([59.970609, 30.310975], {
            hintContent: 'Ресторан на Попова',
            balloonContentHeader: 'Ресторан на Попова',
            balloonContentBody: 'Мы всегда рады угостить Вас вкусными бургерами!',
            balloonContentFooter: 'Заходите в гости!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57],
        }); // burger 1

        var burger2 = new ymaps.Placemark([59.945041, 30.382558], {
            hintContent: 'Ресторан на Кавалерградской',
            balloonContentHeader: 'Ресторан на Кавалерградской',
            balloonContentBody: 'Мы всегда рады угостить Вас вкусными бургерами!',
            balloonContentFooter: 'Заходите в гости!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 2

        var burger3 = new ymaps.Placemark([59.915834, 30.492936], {
            hintContent: 'Ресторан на Подвойского',
            balloonContentHeader: 'Ресторан на Подвойского',
            balloonContentBody: 'Мы всегда рады угостить Вас вкусными бургерами!',
            balloonContentFooter: 'Заходите в гости!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 3

        var burger4 = new ymaps.Placemark([59.888039, 30.315425], {
            hintContent: 'Ресторан на Заставкой',
            balloonContentHeader: 'Ресторан на Заставкой',
            balloonContentBody: 'Мы всегда рады угостить Вас вкусными бургерами!',
            balloonContentFooter: 'Заходите в гости!'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 4

        myMap.geoObjects.add(burger1);
        // burger1.balloon.open();
        myMap.geoObjects.add(burger2);
        myMap.geoObjects.add(burger3);
        myMap.geoObjects.add(burger4);

        myMap.behaviors.disable('scrollZoom'); 
    }



}); //ready END