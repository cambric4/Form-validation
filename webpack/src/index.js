// Select form and inputs
const form = document.getElementById('signup-form');
const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('success-message');

const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const postalCodeInput = document.getElementById('postal-code');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Select error messages
const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const postalCodeError = document.getElementById('postal-code-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Validation functions
function validateEmail() {
    const emailValue = emailInput.value;
    if (!emailValue) {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}

function validateCountry() {
    const countryValue = countryInput.value;
    if (!countryValue) {
        countryError.textContent = "Country is required";
        countryError.style.display = "block";
    } else {
        countryError.style.display = "none";
    }
}

function validatePostalCode() {
    const postalCodeValue = postalCodeInput.value;
    if (!postalCodeValue) {
        postalCodeError.textContent = "Postal code is required";
        postalCodeError.style.display = "block";
    } else if (!/^\d{5}$/.test(postalCodeValue)) {
        postalCodeError.textContent = "Postal code should be 5 digits";
        postalCodeError.style.display = "block";
    } else {
        postalCodeError.style.display = "none";
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value;
    if (!passwordValue) {
        passwordError.textContent = "Password is required";
        passwordError.style.display = "block";
    } else if (passwordValue.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters";
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value;
    const passwordValue = passwordInput.value;

    if (!confirmPasswordValue) {
        confirmPasswordError.textContent = "Please confirm your password";
        confirmPasswordError.style.display = "block";
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.display = "block";
    } else {
        confirmPasswordError.style.display = "none";
    }
}

// Add event listeners
emailInput.addEventListener('input', validateEmail);
countryInput.addEventListener('input', validateCountry);
postalCodeInput.addEventListener('input', validatePostalCode);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Run all validations before submit
    validateEmail();
    validateCountry();
    validatePostalCode();
    validatePassword();
    validateConfirmPassword();

    // Get all error messages
    const errors = document.querySelectorAll('.error-message');

    // Check if any error messages are visible
    const hasVisibleErrors = Array.from(errors).some(error => {
        return window.getComputedStyle(error).display !== 'none';
    });

    if (!hasVisibleErrors) {
        successMessage.textContent = "🖐️ High five! Form submitted successfully.";
        successMessage.style.color = "green";
        form.reset(); // Reset form after successful submission
    } else {
        successMessage.textContent = "Please fix the errors in the form.";
        successMessage.style.color = "red";
    }
});
