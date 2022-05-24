//Form validation NO ANDA LCDLL

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, message]);
    checkLength(name,3,15);
    checkEmail(email);
    checkMessage(message);
});



// Switch Languages --- Esta funcion no anda

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