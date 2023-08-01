// eslint-disable-next-line no-unused-vars
import css from "./index.css";

const email = document.getElementById("email");

email.addEventListener("input", () => {
  if (!/^.+@.+\..+$/.test(email.value)) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const password = document.getElementById("password");

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    password.setCustomValidity("6 characters minimum");
  } else if (password.value.length > 30) {
    password.setCustomValidity("30 characters maximum");
  } else if (/^[a-zA-Z0-9]+$/.test(password.value)) {
    password.setCustomValidity("Must contain 1 special character");
  } else if (/^([a-z0-9]|[^a-zA-Z0-9])+$/.test(password.value)) {
    password.setCustomValidity("Must contain 1 uppercase letter");
  } else if (/^([A-Z0-9]|[^a-zA-Z0-9])+$/.test(password.value)) {
    password.setCustomValidity("Must contain 1 lowercasae letter");
  } else {
    password.setCustomValidity("");
  }
});

const confirm = document.getElementById("confirm-password");

confirm.addEventListener("input", () => {
  if (confirm.value !== password.value) {
    confirm.setCustomValidity("Passwords must match!");
  } else {
    confirm.setCustomValidity("");
  }
});

const zip = document.getElementById("zipcode");

zip.addEventListener("input", () => {
  if (zip.value.length !== 5 || /^[^0-9]+$/.test(zip.value)) {
    zip.setCustomValidity("Must be a 5 digit number!");
  } else {
    zip.setCustomValidity("");
  }
});

const country = document.getElementById("country");

country.addEventListener("input", () => {
  if (country.value === "") {
    country.setCustomValidity("Select a country!");
    country.classList.add("invalid");
  } else {
    country.setCustomValidity("");
    country.classList.remove("invalid");
  }
});
