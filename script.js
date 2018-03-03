const form = document.querySelector('.website_form');
const formName = document.querySelector('.website_formName');
const formSurname = document.querySelector('.website_formSurname');
const formEmail = document.querySelector('.website_formEmail');
const alert = document.querySelectorAll('.website_form--alert');
console.log(alert[0])


form.addEventListener('submit', function() {
  validateName();
  validateSurname();
  validateEmail();
});


function validateName() {
  if (formName.value.length < 1 || formName.value.match(/\d|\s/g)) {
    alert[0].style.display = "block";
  } else {
    alert[0].style.display = "none";
    console.log(formName.value);
  }
}

function validateSurname() {
  if (formSurname.value.length < 1 || formSurname.value.match(/\d/)) {
    alert[1].style.display = "block";
  } else {
    alert[1].style.display = "none";
    console.log(formSurname.value);
  }
}

function validateEmail() {
  if (formEmail.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
    alert[2].style.display = "none";
    console.log(formEmail.value);
  }
  else {
    alert[2].style.display = "block";
  }
}