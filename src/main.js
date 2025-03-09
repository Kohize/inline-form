let emailField = document.querySelector('.email');
let postalField = document.querySelector('.postal');
let passwordField = document.querySelector('.password');
let passwordConfirmationField = document.querySelector('.password__confirm');
let submitButton = document.querySelector('.submit__button');
submitButton.disabled = true;
let dataIsValid = false;

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const POSTAL_REGEXP = /^(\d(\s+)?){6}$/;
const PASSWORD_REGEXP =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/;

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

const checkPassword = () => {
  let passwordFieldStatus = document.querySelector('.input__status--pass');
  if (isPasswordValid(passwordField.value)) {
    makeInputValid(passwordField, passwordFieldStatus);
  } else {
    makeInputInvalid(passwordField, passwordFieldStatus);
    passwordFieldStatus.style.whiteSpace = 'pre-line';
    passwordFieldStatus.innerHTML += `\nPassword should contain: 
    At least one upper case. 
       At least one lower case. 
       At least one special symbol. 
       Minmum eight in length.`;
  }
};

const isPasswordValid = (value) => {
  return PASSWORD_REGEXP.test(value);
};

const checkPasswordConfirmation = () => {
  let passwordConfirmationFieldStatus = document.querySelector(
    '.input__status--passconfirm'
  );
  if (passwordConfirmationField.value === passwordField.value) {
    makeInputValid(passwordConfirmationField, passwordConfirmationFieldStatus);
  } else {
    makeInputInvalid(
      passwordConfirmationField,
      passwordConfirmationFieldStatus
    );
    passwordConfirmationFieldStatus.innerHTML = '❌ Passwords doesnt equal';
  }
};

emailField.addEventListener('input', checkEmail);
postalField.addEventListener('input', checkPostal);
passwordField.addEventListener('input', checkPassword);
passwordConfirmationField.addEventListener('input', checkPasswordConfirmation);

const enableSubmitButton = () => {
  if (!dataIsValid) {
  }
};
