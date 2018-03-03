const form = document.querySelector('.website_form');
const formName = document.querySelector('.website_formName');
const formSurname = document.querySelector('.website_formSurname');
const formEmail = document.querySelector('.website_formEmail');


form.addEventListener('submit', function() {
  functSubmit();
  secondfunctSubmit();
});
function functSubmit() {
  console.log(formName.value);
}

function secondfunctSubmit() {
  console.log(formSurname.value);
}