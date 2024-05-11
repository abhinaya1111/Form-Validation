document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset previous errors
    clearErrors();

    // Validate full name
    if (fullName.length < 5) {
        showError('fullNameError', 'Name must be at least 5 characters long');
    }

    // Validate email
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address');
    }

    // Validate phone number
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        showError('phoneNumberError', 'Enter a valid 10-digit phone number');
    }

    // Validate password
    if (password.length < 8 || password === 'password' || password === fullName) {
        showError('passwordError', 'Password must be at least 8 characters long and not equal to "password" or your name');
    }

    // Confirm password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
    }

    // If no errors, submit the form
    if (validateForm()) {
        this.submit();
    }
});

// Function to display error message
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    var errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.textContent = '';
    });
}

// Function to check if there are any errors
function validateForm() {
    var errors = document.querySelectorAll('.error');
    var isValid = true;
    errors.forEach(function(error) {
        if (error.textContent !== '') {
            isValid = false;
        }
    });
    return isValid;
}