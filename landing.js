document.addEventListener("DOMContentLoaded", function () {
    // Example book data (replace with dynamic data)
    const books = [
        { title: "The Alchemist", author: "Paulo Coelho", price: "₹259.00"},
        { title: "When Breath Becomes Air", author: "Paul Kalanithi", price: "₹199.00" },
        { title: "The Adventures of Tom Sawyer", author: "Mark Twain", price: "₹149.00" },
        { title: "WINGS OF FIRE", author: "APJ Abdul Kalam", price: "₹174.00" },
        { title: "The Power of Your Subconscious Mind", author: "Joseph Murphy", price: "₹129.00" },
        { title: "Ghosts of The Silent Hills:", author: " Anita Krishan ", price: "₹169.00" },
        { title: "The Diary Of A Young Girl -FINGERPRINT ", author: "Anne Frank ", price: "₹119.00" },
        { title: "KARMA: A YOGI'S GUIDE TO CRAFTING YOUR DESTINY", author: "Sadhguru", price: "₹192.00" },
        { title: "Always On My Mind", author: " Beth Moran ", price: "₹149.00" },
        { title: "You Only Live Once", author: "Changle Stuti", price: "₹165.00" },
        { title: "Be Your Own Sunshine", author: " James Allen", price: "₹115.00" },
        { title: "Don't Believe Everything You Think ", author: "Joseph Nguyen", price: "₹191.00" },
    ];



    // Function to display the signup form
    function displaySignupForm() {
        const signupSection = document.querySelector(".signup");
        signupSection.innerHTML = `
            <h2>Sign Up</h2>
            <!-- Add your signup form here -->
        `;
    }

    // Function to display the login form
    function displayLoginForm() {
        const loginSection = document.querySelector(".login");
        loginSection.innerHTML = `
            <h2>Log In</h2>
            <!-- Add your login form here -->
        `;
    }

    // Initial page load
    displayBooks();
    displaySignupForm();
    displayLoginForm();
});
