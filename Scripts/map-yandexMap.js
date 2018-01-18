$(document).ready(function() {

    ymaps.ready(init);
    var myMap, burger1, burger2, burger3, burger4;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [59.939095, 30.315868],
            zoom: 11
        });

        var burger1 = new ymaps.Placemark([59.970609, 30.310975], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 1

        var burger2 = new ymaps.Placemark([59.945041, 30.382558], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 2

        var burger3 = new ymaps.Placemark([59.915834, 30.492936], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 3

        var burger4 = new ymaps.Placemark([59.888039, 30.315425], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'IMG8/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }); // burger 4

        myMap.geoObjects.add(burger1);
        myMap.geoObjects.add(burger2);
        myMap.geoObjects.add(burger3);
        myMap.geoObjects.add(burger4);

        // myMap.behaviors.disable(‘scrollZoom’);
    }



}); //ready END