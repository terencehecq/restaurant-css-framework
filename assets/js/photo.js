$(document).ready(function() {
    var pagiNation = 1;


    $(".image-box").click('click', function() {
        var getSourceTarget = $(this).children(":nth-child(2n)");
        var getLink = ($(getSourceTarget).children(":nth-child(" + (pagiNation) + "n)").attr('src'));
        //alert(getLink);
        var matchesLink = getLink.split('_');
        $("#bigPicToChange").fadeOut("slow", function() {
            var newOne = $("#bigPicToChange").attr('src', 'assets/images/photos/' + matchesLink[1]);
            newOne.fadeIn('fast');
        });
    });

    // on va ajouter un event aux boutons
    $('.page-link').click('click', function() {
        //alert(pagiNation);
        // et on initie la variable cible
        var optionChoice = ($(this).html());
        if (pagiNation != optionChoice) {

            var targetToShow = "img" + optionChoice;
            $(".image-box .pics img").not("." + targetToShow).animate({
                "opacity": "0",
                "z-index": "-1"
            }, 0);



            $("." + targetToShow).animate({
                "opacity": "1",

            }, 0, function() {
                $("." + targetToShow).css("z-index", "9999");
            });
            pagiNation = optionChoice;

        }
    });
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 5) {

            $("nav").addClass("menuSmall");

        } else {

            $("nav").removeClass("menuSmall");

        }
    });

});