

// scripts.js
async function searchUser() {
    const username = document.getElementById('search-input').value.trim();
    
    if (username === '') {
        alert('Please enter a GitHub username.');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        
        if (response.ok) {
            displayUser(userData);
        } else {
            displayErrorMessage('User not found.');
        }
    } catch (error) {
        displayErrorMessage('An error occurred while fetching user data.');
    }
}

function displayUser(userData) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
        <img src="${userData.avatar_url}" alt="Profile Picture" width="150">
        <h2>${userData.name}</h2>
        <p>${userData.login}</p>
        <p>${userData.bio || ''}</p>
        <p>${userData.location || ''}</p>
    `;
}

function displayErrorMessage(message) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `<p class="error-message">${message}</p>`;
}
