$(document).ready(function() {
    listo();
});

function listo()
{
    $(".hamb").click(function(e)
    {
        e.preventDefault();

        $("header .container nav").toggleClass("open");
        $(".hamb i").toggleClass("fa-bars fa-times");
    });

    $("header .container nav a").click(function(e)
    {
        e.preventDefault();

        $("header .container nav").removeClass("open");
        $(".hamb i").removeClass("fa-times").addClass("fa-bars");

        var dev = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(dev).offset().top - 76
        });
    });
}           