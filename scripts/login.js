// select form by id
const loginForm = document.querySelector('#login-form')

// handle form submit event
loginForm.addEventListener('submit', function(event) {
    console.log(event.target)
    event.preventDefault();
    // Collect form data
    // const formData = new FormData(loginForm);
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'),
        formData.get('password')
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Login successful!';
});