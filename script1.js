document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Add your form validation logic here
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Create an object with user data (you can send this data to the server)
    const userData = {
        username: username,
        email: email,
        password: password
    };

    // You can send the userData object to the server for further processing (e.g., with AJAX)

    // Clear form fields after submission
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";

    // Display a success message or redirect the user to another page
    alert("Signup successful!");
});
