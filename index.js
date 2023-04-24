// Get the modal element
var modal = document.querySelector(".modal");

// Get the login and signup buttons
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");

// Get the close button
var closeBtn = document.querySelector(".close");

// When the user clicks the login button, display the login modal
loginBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
});

// When the user clicks the signup button, display the signup modal
signupBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
});

// When the user clicks on the close button, close the modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
  document.querySelector(".overlay").style.display = "none";
});

// When the user clicks outside of the modal, close the modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector(".overlay").style.display = "none";
  }
});

// When the user submits the login form, validate the inputs
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Perform your validation here and show an error message if necessary
  // Once the validation passes, you can redirect the user to the appropriate page or perform other actions
});

// When the user submits the signup form, validate the inputs
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;
  // Perform your validation here and show an error message if necessary
  // Once the validation passes, you can redirect the user to the appropriate page or perform other actions
});



