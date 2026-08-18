const form = document.getElementById("reg-form");
const inputs = form.querySelectorAll("input");

function validateField(input) {
  if (input.checkValidity()) {
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}

// submit-ზე — ყველა ველი ერთდროულად მოწმდება
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isFormValid = true;

  inputs.forEach(function (input) {
    validateField(input);
    if (!input.checkValidity()) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    window.location.href = "next-page.html";
  }
});

// მას შემდეგ, რაც ერთხელ submit ეცადა, ცოცხლად ამოწმებს
// მხოლოდ იმ ველს, რომელშიც მომხმარებელი წერს
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (form.classList.contains("attempted")) {
      validateField(input);
    }
  });
});

form.addEventListener("submit", function () {
  form.classList.add("attempted");
});
