const form = document.querySelector('.website_form');
const formName = document.querySelector('.website_formName');
const formSurname = document.querySelector('.website_formSurname');
const formEmail = document.querySelector('.website_formEmail');
const alert = document.querySelectorAll('.website_form--alert');
console.log(alert)


form.addEventListener('submit', function() {
  validate((formName.value.length < 1 || formName.value.match(/\d|\s|[.*+?^${}@()|[\]\\]/g)), alert[0]);
  validate((formSurname.value.length < 1 || formSurname.value.match(/\d/)), alert[1]);
  validate(!(formEmail.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)), alert[2]);
});

function validate(conditionRegEx, alertSelector) {
  if (conditionRegEx) {
    alertSelector.style.display = "block";
  } else {
    alertSelector.style.display = "none";
    console.log(formName.value, formSurname.value, formEmail.value);
  }
}