// fetch-data.js

// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold user data
        const userList = document.createElement('ul');

        // Loop through the users array and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);


