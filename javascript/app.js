// let email_pattern = /^[^ ] + @[^ ] + \.[a-z]{2,3}$/;
let email = document.querySelector("#email");

let user_email_id = document.querySelector(".user-email-id");

let subscription_form = document.querySelector("#subscription-form");

let btn = document.querySelector(".btn");

let error_message = document.querySelector(".error-message");

let mail_check_pattern =
  /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function validate() {
  if (email.value.match(mail_check_pattern)) {
    error_message.classList.add(".success");
    error_message.innerHTML = "Notification will be send to your email-id";
  } else if (!email.value.match(mail_check_pattern)) {
    error_message.innerHTML = "Whoops! It looks like you forgot to add your email";
    email.classList.add("error");
    error_message.classList.add = "error-message";
    error_message.style.display = "block";
  }
}

subscription_form.onsubmit = function (e) {
  e.preventDefault();
};

btn.addEventListener("click", validate);
