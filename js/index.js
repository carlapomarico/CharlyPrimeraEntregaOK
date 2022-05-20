
$( document ).ready(function () {

    // By default
    $('.en_lang').addClass("active-lang");
    $('#lang-switch .en').addClass("active-side");

    // Function switch
    $(function () {
        // Spanish button
        $("#lang-switch .es").click(function () {

            // Enable Spanish
            $('.es_lang').addClass("active-lang");

            // Disable English
            $('.en_lang').removeClass("active-lang");

        });

        // English button
        $("#lang-switch .en").click(function () {

            // Enable English
            $('.en_lang').addClass("active-lang");

            // Disable Spanish
            $('.es_lang').removeClass("active-lang");
        });
    });
});

/* $(function(){
// Kui ma klikin ID-ga eng elemendi peale
$("#eng").click(function(){
  //klassiga german, kao vaikselt ära
  $(".german").fadeOut();
     //klassiga english, tule vaikselt esile
   $(".english").fadeIn();
});
// Kui ma klikin ID-ga de elemendi peale
$("#de").click(function(){
    //klassiga english, kao vaikselt ära
   $(".english").hide();
      //klassiga german, tule vaikselt esile
  $(".german").show();
});
}); */