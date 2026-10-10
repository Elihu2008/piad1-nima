// PARTE 04 - jQuery: menu hamburguesa
$(document).ready(function () {
    $(".hamb").click(function (e) {
        e.preventDefault();
        var abierto = $("header .container nav").toggleClass("open").hasClass("open");
        $(this).attr("aria-expanded", abierto ? "true" : "false");
        $(this).attr("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
        $(".hamb i").toggleClass("fa-bars fa-xmark");
    });
    $("header .container nav a").click(function () {
        $("header .container nav").removeClass("open");
        $(".hamb").attr("aria-expanded", "false").attr("aria-label", "Abrir menú");
        $(".hamb i").removeClass("fa-xmark").addClass("fa-bars");
    });
    // No hay enviar.php ni servidor en los archivos originales.
    $("#contactanos form").on("submit", function (e) {
        e.preventDefault();
        $(".aviso-formulario").text("Formulario de ejemplo: no se envían mensajes sin un servidor.");
    });
});
