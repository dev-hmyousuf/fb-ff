const btn = document.getElementById("btn");
const email = document.getElementById("email");
const invalid = document.getElementById("invalid");
const password = document.getElementById("password");
const login = document.getElementById("login");
const emailError = document.getElementById("valid-error");
const showPass = document.getElementsByClassName("fa-eye")

btn.addEventListener("click", function () {
  if (email.value == "") {
    invalid.style.display = "block";
  } else if (password.value == "") {
    invalid.style.display = "block";
  } else {
    login.style.display = "block";
    invalid.style.display = "none";
  }});

showPass.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  }
  else {
    password.type = "password";
  }    
  }

function validateEmail() {
  if(!email.value.match(
(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  )) {
    emailError.innerHTML = "Please enter a valid email address";
    email.style.borderBottomColor = "red";
    return false;
}
  emailError.innerHTML = "Please enter a valid email address";
  return true;
}

window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup.").style.display = "block";
    },
    2000
  )
  
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});