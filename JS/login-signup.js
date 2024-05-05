const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the login form
    const loginForm = document.getElementById("MainForm");
  
    // Add event listener for form submission
    loginForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect the user to the next page
      window.location.href = "selection.html";
    });
  });
  