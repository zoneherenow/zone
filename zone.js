const textElement = document.getElementById('typing-text');
const textToType = "Oh, hello. You've ventured a little too far. Come back another time.";
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    // Adjust the delay (e.g., 50ms) as needed
    setTimeout(typeWriter, 50); 
  }
}

// Start the animation
typeWriter();
