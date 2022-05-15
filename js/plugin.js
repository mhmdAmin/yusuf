/*global $, console*/
$(document).ready(function () {
    "use strict";
    $("html").niceScroll();

    $('.links li a').click(function () {
        "use strict";
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1400);
    });



    // Start custom-menu

    $("#menu-toggler").on("click", function () {
        $("#custom-menu .links").toggleClass("open-menu")
    })

    // End custom-menu

});