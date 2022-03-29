const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const sumbitButton = document.querySelector(".sumbit-button");
const input = document.querySelectorAll("input");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

sumbitButton.addEventListener("click", function () {
  input.forEach((e) => {
    if (!e.validity.valid) {
      e.style.setProperty("border-color", "crimson");
    } else {e.style.setProperty("border-color", "var(--accent-color)")}
  });
});
