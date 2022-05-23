$(function () {
    $("#english").click(function () {
        $(".en-lang").fadeOut();
        $(".es-lang").fadeIn();
    });
    $("#spanish").click(function () {
        $(".es-lang").hide();
        $(".en-lang").show();
    });
});