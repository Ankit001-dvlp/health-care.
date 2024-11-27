
function getStarted() {
    alert("Welcome to our healthcare services! Let us assist you in your health journey.");
}

// Function to validate contact form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    alert("Your message has been sent successfully!");
    return true;
}
