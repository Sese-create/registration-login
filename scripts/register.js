// Select form by id
const registerForm = document.querySelector('#register-form');


// Handle form submit event
registerForm.addEventListener('submit', function(event) {
    console.log(event.target)
    event.preventDefault();
    // Collect form data
    // const formData = new FormData(registerForm);
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully!';
});

// age variable
const age = 44;
// square of age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;


}
const squaredAge = squareAge(45);


// function to get full name
function fullName(firstName,lastName) {
// firstName + lastName;
return `${firstName} ${lastName}`;

}
const myFullName = fullName('Mawuse', 'Morttey');
