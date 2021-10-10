/* NOTE The Document method querySelector() returns the first Element within the document that matches 
the specified selector, or group of selectors. If no matches are found, null is returned. */
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

/* NOTE addEventListener() is an inbuilt function in JavaScript which takes the event to listen for */
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/* NOTE Toggle password */
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // NOTE toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // NOTE toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});