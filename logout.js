// logout.js

// Import Firebase modules
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Logout Functionality
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            console.log('User signed out');
            alert('Logged out successfully');
            window.location.href = "index.html"; // Redirect to login page after logout
        }).catch((error) => {
            console.error('Logout error:', error);
            alert('Logout failed: ' + error.message);
        });
    });
}
