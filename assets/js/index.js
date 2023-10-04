
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

// Add a click event listener to the social media buttons
const socialMediaButtons = document.querySelectorAll('.social-media-button');

for (const button of socialMediaButtons) {
  button.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // TODO: Implement social media login

    // Alert the user that they have clicked on a social media button
    alert('You have clicked on the ' + button.classList[1] + ' button.');
  });
}