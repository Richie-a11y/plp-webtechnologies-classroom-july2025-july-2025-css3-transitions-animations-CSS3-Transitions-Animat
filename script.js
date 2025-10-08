// JavaScript functions demonstrating scope, parameters, and return values

// Global variable
let animationActive = false;

// Function to toggle animation on the box
function toggleAnimation(element) {
  element.classList.toggle('animate');
  animationActive = !animationActive;
  return animationActive; // returning new animation state
}

// Function with parameters and return values
function calculateScale(baseSize, multiplier) {
  const result = baseSize * multiplier;
  console.log(`Calculated scale: ${result}`);
  return result;
}

// Local scope demonstration
function demoLocalScope() {
  let message = "This is a local variable example";
  console.log(message);
}

demoLocalScope(); // This only works inside the function scope

// DOM element references
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const modal = document.getElementById('modal');
const showModal = document.getElementById('showModal');
const closeModal = document.getElementById('closeModal');

// Triggering CSS animation dynamically using JS
animateBtn.addEventListener('click', () => {
  const newState = toggleAnimation(box);
  console.log(`Box animation active: ${newState}`);
  calculateScale(2, 1.5); // Example function call
});

// Modal control functions
function showPopup() {
  modal.classList.add('show');
}

function closePopup() {
  modal.classList.remove('show');
}

// Event listeners for modal
showModal.addEventListener('click', showPopup);
closeModal.addEventListener('click', closePopup);
