// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate inputs and get feedback
        const { isValid, messages } = validateInputs(username, email, password);

        // Display feedback
        displayFeedback(isValid, messages);
    });

    // Function to validate inputs
    function validateInputs(username, email, password) {
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        return { isValid, messages };
    }

    // Function to display feedback
    function displayFeedback(isValid, messages) {
        feedbackDiv.style.display = 'block'; // Show the feedback div

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Show error messages
            feedbackDiv.style.color = '#dc3545'; // Red for errors
        }
    }
});
