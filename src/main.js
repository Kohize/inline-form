let emailField = document.querySelector('.email');
let postalField = document.querySelector('.postal');

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const POSTAL_REGEXP = /^(\d(\s+)?){6}$/;

const makeInputValid = (field, fieldStatus) => {
  field.style.borderColor = 'green';
  fieldStatus.innerHTML = '✔️';
  fieldStatus.classList.remove('invalid');
  fieldStatus.classList.add('valid');
};

const makeInputInvalid = (field, fieldStatus) => {
  field.style.borderColor = 'red';
  fieldStatus.innerHTML = `❌ You must enter a valid ${field.getAttribute(
    'placeholder'
  )}`;
  fieldStatus.classList.remove('valid');
  fieldStatus.classList.add('invalid');
};

const checkEmail = () => {
  let emailFieldStatus = document.querySelector('.input__status--email');
  if (isEmailValid(emailField.value)) {
    makeInputValid(emailField, emailFieldStatus);
  } else {
    makeInputInvalid(emailField, emailFieldStatus);
  }
};

const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value);
};

const checkPostal = () => {
  let postalFieldStatus = document.querySelector('.input__status--postal');
  if (isPostalValid(postalField.value)) {
    makeInputValid(postalField, postalFieldStatus);
  } else {
    makeInputInvalid(postalField, postalFieldStatus);
  }
};

const isPostalValid = (value) => {
  return POSTAL_REGEXP.test(value);
};

emailField.addEventListener('input', checkEmail);
postalField.addEventListener('input', checkPostal);
