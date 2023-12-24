function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate username (email)
    var usernameError = document.getElementById('usernameError');
    if (!validateEmail(username)) {
        usernameError.textContent = 'Invalid email address';
        return;
    } else {
        usernameError.textContent = '';
    }

    // Validate password
    var passwordError = document.getElementById('passwordError');
    if (!validatePasswordFormat(password)) {
        passwordError.textContent = 'Invalid password format';
        return;
    } else {
        passwordError.textContent = '';
    }
    console.log('Sign up successful!');
    alert(' Valid Credentials')
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePasswordFormat(password) {
    // Password must contain an uppercase letter, a number, and no special characters other than '@'
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).*[^\W_@]$/;
    return passwordRegex.test(password);
}

