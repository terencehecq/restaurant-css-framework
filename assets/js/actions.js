$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 5) {

        $("nav").addClass("menuSmall");

    } else {

        $("nav").removeClass("menuSmall");

    }
});