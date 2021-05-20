const emailForm = document.querySelector(".footer__email-form");
const emailInput = document.querySelector(".footer__input");
const emailError = document.querySelector(".footer__email-error");



emailInput.addEventListener("invalid", e => {
    e.preventDefault();
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "Oops! Please add your email";
    }
    if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Oops! Please check your email";
    }
    emailError.classList.add("show-error");
    emailInput.classList.add("error-invalid");
});

emailForm.addEventListener("submit", function() {
  if(this.checkValidity()) {
    emailError.classList.remove("show-error");
    emailInput.classList.remove("error-invalid");
  }
});
