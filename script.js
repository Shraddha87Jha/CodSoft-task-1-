document.addEventListener("DOMContentLoaded", function () {
    // Example book data (replace with dynamic data)
    const books = [
        { title: "The Alchemist", author: "Paulo Coelho", price: "₹259.00"},
        { title: "Book 2", author: "Author 2", price: "$24.99" },
        { title: "Book 3", author: "Author 3", price: "$14.99" },
        { title: "Book 4", author: "Author 4", price: "$19.99" },
        { title: "Book 5", author: "Author 5", price: "$24.99" },
        { title: "Book 6", author: "Author 6", price: "$14.99" },
        { title: "Book 7", author: "Author 1", price: "$19.99" },
        { title: "Book 8", author: "Author 2", price: "$24.99" },
        { title: "Book 9", author: "Author 3", price: "$14.99" },
        { title: "Book 10", author: "Author 4", price: "$19.99" },
        { title: "Book 11", author: "Author 5", price: "$24.99" },
        { title: "Book 12", author: "Author 6", price: "$14.99" },
    ];

    // Function to display books
    function displayBooks() {
        const booksContainer = document.querySelector(".books");

        books.forEach((book) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price}</p>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            `;
            booksContainer.appendChild(bookCard);
        });
    }

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
