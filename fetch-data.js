async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user’s name
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the final list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling
        console.error('Fetching data failed:', error);
        dataContainer.innerHTML = ''; // Clear loading/previous message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
