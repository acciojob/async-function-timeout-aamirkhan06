//your JS code here. If required.
// script.js

// Get references to the input fields and the output div
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitButton = document.getElementById('btn');

// Function to introduce a delay using async/await
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listener for form submission
submitButton.addEventListener('click', async () => {
  try {
    // Retrieve user-provided text and delay values
    const userText = textInput.value;
    const userDelay = parseInt(delayInput.value, 10); // Convert to milliseconds

    // Validate user input
    if (!userText || isNaN(userDelay)) {
      outputDiv.textContent = 'Please enter valid text and delay.';
      return;
    }

    // Introduce a delay
    await sleep(userDelay);

    // Display the user-provided text
    outputDiv.textContent = userText;
  } catch (error) {
    console.error('An error occurred:', error);
    outputDiv.textContent = 'An error occurred. Please try again.';
  }
});
