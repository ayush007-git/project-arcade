// Get references to the form and input fields
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the input values
  if (username === '' || password === '') {
    alert('Please provide both a username and password.'); // Display an error message if any field is empty
    return;
  }

  // Check if the username is a valid email address
  if (!isValidEmail(username)) {
    alert('Please enter a valid email address.'); // Display an error message if the email is not valid
    return;
  }

  // Check if the password meets the required criteria (e.g., minimum length, special characters, etc.)
  if (!isValidPassword(password)) {
    alert('Please enter a valid password.'); // Display an error message if the password is not valid
    return;
  }

  // If all validations pass, you can proceed with submitting the form
  // You can add your own logic here to handle form submission, such as sending an AJAX request to a server or redirecting to another page
});

// Function to validate email address
function isValidEmail(email) {
  // You can use a regular expression to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password
function isValidPassword(password) {
  // You can add your own validation criteria for the password
  // For example, you can check if it has a minimum length or contains special characters
  return password.length >= 8;
}
