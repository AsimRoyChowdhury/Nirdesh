// Get all the div elements with id "nirdesh-writing"
const divElements = document.querySelectorAll("#nirdesh-writing-x");

let totalAnimationDuration = 0;

// Loop through each div element and add the classes
divElements.forEach((divElement, index) => {
  divElement.classList.add("line-1", "anim-typewriter");

  // Calculate the animation delay based on the total duration
  const animationDelay = totalAnimationDuration / 5; // Convert to seconds
  divElement.style.animationDelay = `${animationDelay}s`;

  // Calculate the total duration by adding the animation durations and delays
  const animationDuration = parseFloat(getComputedStyle(divElement).animationDuration) * 5; // Convert to milliseconds
  const animationDelayMilliseconds = parseFloat(getComputedStyle(divElement).animationDelay); // Convert to milliseconds
  totalAnimationDuration += animationDuration + animationDelayMilliseconds;
});
