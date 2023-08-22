/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

// Message with button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("counter");

  button.addEventListener("click", function () {
    alert("Welcome");
  });
});

const form = document.getElementsByClassName("data");
const username = document.getElementById("name-on-card");
const cardNumber = document.getElementById("card-number");
const expiryDate = document.getElementById("expiry-date");
const cvv = document.getElementById("cvv");

//Validation inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

//Setting errors validation  and message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};

//Succes function
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
};

/*Card numbers
const isValidCardNum = cardNumber => {
    if (cardNumber <= 15) && (cardNumber >= 15) {

    }
}  https://www.youtube.com/watch?v=CYlNJpltjMM 8:31  */

// Deleted empty space in value
const validateInputs = () => {
  const username = username.value.trim();
  const cardNumber = cardNumber.value.trim();
  const expiryDate = expiryDate.value.trim();
  const cvv = cvv.value.trim();

  if (username === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (cardNumber === "") {
    setError(cardNumber, "Card numbers are required");
  } else {
    setSuccess(cardNumber);
  }

  if (expiryDate === "") {
    setError(expiryDate, "Expiry date is required");
  } else {
    setSuccess(expiryDate);
  }

  if (cvv === "") {
    setError(cvv, "CVV numbers are required");
  } else {
    setSuccess(cvv);
  }
};
