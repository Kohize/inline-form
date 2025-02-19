let emailField = document.querySelector('.email');
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
console.log(emailField);

const onInput = () => {
  if (isEmailValid(emailField.value)) {
    emailField.style.borderColor = 'green';
  } else {
    emailField.style.borderColor = 'red';
  }
};

const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value);
};

emailField.addEventListener('input', onInput);
