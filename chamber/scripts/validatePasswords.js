document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const email = document.getElementById("email").value;
        const errorMessage = document.getElementById("error-message");

        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;


        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match. Please try again.";
            errorMessage.style.display = "block";
            document.getElementById("password").value = "";
            document.getElementById("confirm-password").value = "";
            document.getElementById("password").focus();
            return false;
        }


        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Invalid email address. You must use a byui.edu email.";
            errorMessage.style.display = "block";
            document.getElementById("email").focus();
            return false;
        }

   
        errorMessage.style.display = "none";
        showConfirmation();
        return false; 
    });
});

function showConfirmation() {
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Congratulations! You have successfully signed up.";


    confirmationMessage.style.color = "white";
   

    confirmationMessage.style.fontSize = "2rem";  
    confirmationMessage.style.fontWeight = "bold";
    confirmationMessage.style.textAlign = "center";


    const formContainer = document.querySelector("main");
    formContainer.innerHTML = "";  
    formContainer.style.display = "flex";

    formContainer.style.alignItems = "center";
    formContainer.style.height = "20vh";
    formContainer.style.flexDirection = "column";

    formContainer.appendChild(confirmationMessage);
}
