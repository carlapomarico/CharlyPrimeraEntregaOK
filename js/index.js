//Form validation NO ANDA LCDLL


function contactForm() {
    var contactName = document.getElementById("name").value;
    var contactEmail = document.getElementById("email").value;
    var contactMessage = document.getElementById("message").value;
    var contactError_message = document.getElementById("error_message");
  
    contactError_message.style.padding = "10px";
  
    var text;
  
    if (contactName.length < 3) {
      text = "Enter a valid name (more than 3 characters)";
      contactError_message.innerHTML = text;
      return false;
    }
    
    if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
      text = "Enter a valid Email";
      contactError_message.innerHTML = text;
      return false;
    }
    if (contactMessage.length <= 140) {
      text = "Message should have at least 140 characters";
      contactError_message.innerHTML = text;
      return false;
    }
    alert("Gracias por tu mensaje!");
    return true;
  }





// Switch Languages --- Esta funcion no anda aun

// var spanish = document.getElementById('spanish'),
//     english = document.getElementById('english'),
//     sp_txt = document.querySelectorAll('.sp_lang'),
//     en_txt = document.querySelectorAll('.en_lang'),
//     nb_sp = sp_txt.length,
//     nb_en = en_txt.length;

// spanish.addEventListener('click', function() {
//     language(spanish,english);
// }, false);

// english.addEventListener('click', function() {
//     language(english,spanish);
// }, false);

// function language(languageOn,languageOff){
//     if (!languageOn.classList.contains('current_lang')) {
//         languageOn.classList.toggle('current_lang');
//         languageOff.classList.toggle('current_lang');
//     }
//     if(languageOn.innerHTML == 'SP'){
//         display(sp_txt, nb_sp);
//         hide(en_txt, nb_en);
//     }
//     else if(languageOn.innerHTML == 'EN'){
//         display(en_txt, nb_en);
//         hide(sp_txt, nb_sp);
//     }
// }

// function display(txt,nb){
//     for(var i=0; i < nb; i++){
//         txt[i].style.display = 'block';
//     }
// }
// function hide(txt,nb){
//     for(var i=0; i < nb; i++){
//         txt[i].style.display = 'none';
//     }
// }
// function init(){
//     language(spanish,english);
// }
// init();


//ESTA TAMPOCO ANDUVO

// //     if (document.getElementsByClassName("en_lang").style.display = "block") {

// //         document.getElementsByClassName("en_lang").style.display = "none";
// //         document.getElementsByClassName("sp_lang").style.display = "block";
// //     }
// //     else {
// //         document.getElementsByClassName("en_lang").style.display = "block";
// //         document.getElementsByClassName("sp_lang").style.display = "none";
// //     }