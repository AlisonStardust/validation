const form = document.querySelector('.website_form');
const formName = document.querySelector('.website_formName');
const formSurname = document.querySelector('.website_formSurname');
const formEmail = document.querySelector('.website_formEmail');
const formPhone = document.querySelector('.website_formPhone');
const formSent = document.querySelector('.website_form--correct');
const alert = document.querySelectorAll('.website_form--alert');
//console.log(alert)


form.addEventListener('submit', function() {
  validate((formName.value.length < 1 || formName.value.match(/\d|\s|[.*+?^${}@()|[\]\\]/g)), alert[0]);
  validate((formSurname.value.length < 1 || formSurname.value.match(/\d/)), alert[1]);
  validate(!(formEmail.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)), alert[2]);
  validate(!(formPhone.value.match(/\d/g)), alert[3]);
  showCorrect();
});

function validate(condition, alertSelector) {
  if (condition) {
    alertSelector.style.display = "block";
  } else {
    alertSelector.style.display = "none";
    let submittedPhone = formPhone.value.split(" ").join("");
    console.log(formName.value, formSurname.value, formEmail.value, submittedPhone);
  }
}

function showCorrect() {
  if ((alert[0].style.display === "none") && (alert[1].style.display === "none") && (alert[2].style.display === "none") && (alert[3].style.display === "none")) {
    formSent.style.display = "block";
  } else {
    console.log("incorrect form");
  }
}