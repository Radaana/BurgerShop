$(document).ready(function() {

        $(".maincontent").onepage_scroll({
       sectionContainer: "section", // контейнер, к которому будет применяться скролл
       easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
       animationTime: 800, // время анимации
       pagination: true, // скрыть или отобразить пагинатор
       updateURL: false // обновлять URL или нет

    });
