document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('sign-up');
    const signInButton = document.getElementById('sign-in');
    const forgotPasswordButton = document.getElementById('forgot-password');
    const backToSignInButton = document.getElementById('back-to-sign-in');
    const resetButton = document.getElementById('reset-button');
    const signInSubmitButton = document.getElementById('signin-button');

    const loginInForm = document.getElementById('login-in');
    const loginUpForm = document.getElementById('login-up');
    const resetPasswordForm = document.getElementById('reset-password');

    const signInEmailInput = document.getElementById('signin-email');
    const signInPasswordInput = document.getElementById('signin-password');
    const signInError = document.getElementById('signin-error');

    const newPasswordInput = document.querySelector('#reset-password input[placeholder="New Password"]');
    const confirmNewPasswordInput = document.querySelector('#reset-password input[placeholder="Confirm New Password"]');

    const predefinedEmail = "harishma";
    let predefinedPassword = localStorage.getItem('password') || "123"; // Use localStorage to persist password

    console.log("Initial predefinedPassword:", predefinedPassword); // Debug

    signUpButton.addEventListener('click', () => {
        loginInForm.classList.add('none');
        loginUpForm.classList.remove('none');
        resetPasswordForm.classList.add('none');
    });

    signInButton.addEventListener('click', () => {
        loginInForm.classList.remove('none');
        loginUpForm.classList.add('none');
        resetPasswordForm.classList.add('none');
    });

    forgotPasswordButton.addEventListener('click', (event) => {
        event.preventDefault();
        loginInForm.classList.add('none');
        loginUpForm.classList.add('none');
        resetPasswordForm.classList.remove('none');
    });

    backToSignInButton.addEventListener('click', () => {
        loginInForm.classList.remove('none');
        loginUpForm.classList.add('none');
        resetPasswordForm.classList.add('none');
    });

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;

        if (newPassword === '' || confirmNewPassword === '') {
            alert('Please fill in both password fields.');
        } else if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match.');
        } else {
            // Update the predefinedPassword variable and store it in localStorage
            predefinedPassword = newPassword;
            localStorage.setItem('password', newPassword);

            console.log("New predefinedPassword set:", predefinedPassword); // Debug

            alert('Password has been reset successfully.');

            // Clear password fields
            newPasswordInput.value = '';
            confirmNewPasswordInput.value = '';

            // Navigate back to sign-in form
            loginInForm.classList.remove('none');
            loginUpForm.classList.add('none');
            resetPasswordForm.classList.add('none');
        }
    });

    signInSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = signInEmailInput.value;
        const password = signInPasswordInput.value;

        // Fetch the stored password
        const storedPassword = localStorage.getItem('password') || predefinedPassword;

        console.log("Attempted sign-in with email:", email, "and password:", password); // Debug
        console.log("Current storedPassword:", storedPassword); // Debug

        if (email === predefinedEmail && password === storedPassword) {
            window.location.href = "file:///C:/Users/Harishma%20R/OneDrive/Desktop/HTML%20TUTORIAL/land.html";
        } else {
            signInError.classList.remove('none');
        }
    });
});