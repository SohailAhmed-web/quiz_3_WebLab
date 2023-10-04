
// Get the sign up form
const signupForm = document.querySelector('form');

// Add a submit event listener to the form
signupForm.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form data
  if (this.name.value === '' || this.email.value === '' || this.password.value === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Submit the form data to the server
  // TODO: Implement server-side form submission

  // Clear the form data
  this.name.value = '';
  this.email.value = '';
  this.password.value = '';

  // Alert the user that the form has been submitted successfully
  alert('Form submitted successfully!');
});
