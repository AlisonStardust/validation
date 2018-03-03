const form = document.querySelector('.website_form');
const formName = document.querySelector('.website_formName');
const formSurname = document.querySelector('.website_formSurname');
const formEmail = document.querySelector('.website_formEmail');
//const alert = document.querySelectorAll('.website_form--alert');
const tester1 = document.querySelector('.website_form--alert1');
const tester2 = document.querySelector('.website_form--alert2');
const tester3 = document.querySelector('.website_form--alert3');
//console.log(alert.length)


form.addEventListener('submit', function() {
  validateName();
  validateSurname();
  validateEmail();
});


function validateName() {
  if (formName.value.length < 1 || formName.value.match(/\s/) || formName.value.match(/\d/)) {
    tester1.style.display = "block";
  } else {
    tester1.style.display = "none";
    console.log(formName.value);
  }
}

function validateSurname() {
  if (formSurname.value.length < 1 || formSurname.value.match(/\d/)) {
    tester2.style.display = "block";
  } else {
    tester2.style.display = "none";
    console.log(formSurname.value);
  }
}

function validateEmail() {
  if (formEmail.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
    tester3.style.display = "none";
    console.log(formEmail.value);
  }
  else {
    tester3.style.display = "block";
  }
}