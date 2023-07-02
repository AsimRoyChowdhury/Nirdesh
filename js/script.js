// // Get all the div elements with id "nirdesh-writing"
// const divElements = document.querySelectorAll("#nirdesh-writing-x");

// let totalAnimationDuration = 0;

// // Loop through each div element and add the classes
// divElements.forEach((divElement, index) => {
//   divElement.classList.add("line-1", "anim-typewriter");

//   // Calculate the animation delay based on the total duration
//   const animationDelay = totalAnimationDuration / 5; // Convert to seconds
//   divElement.style.animationDelay = `${animationDelay}s`;

//   // Calculate the total duration by adding the animation durations and delays
//   const animationDuration = parseFloat(getComputedStyle(divElement).animationDuration) * 5; // Convert to milliseconds
//   const animationDelayMilliseconds = parseFloat(getComputedStyle(divElement).animationDelay); // Convert to milliseconds
//   totalAnimationDuration += animationDuration + animationDelayMilliseconds;
// });

const linesOfCode = [
  'package org.rkmvcc.nirdesh',
  'public class Nirdesh {',
  '    public static void main(String[] args) {',
  '       //Get Started for the most enthusiastic coding competition',
  '       //Initiating Nirdesh'
];

// Loop through each line of code
linesOfCode.forEach((line, index) => {
  const elementId = `initial-code-${index + 1}`;
  const element = document.getElementById(elementId);

  // Create a new typewriter instance for each line of code element
  const typewriter = new Typewriter(element, {
    loop: false,
    delay: 0,
  });

  if(index==0){
    typewriter
      .typeString(line)
      .pauseFor(1000)
      .callFunction(() => {
        setTimeout(() => {
          typewriter.pause();
          const caretElement = element.querySelector('.Typewriter__cursor');
          caretElement.style.display = 'none';
          console.log('Animation stopped');
        }, 0);
      }, typewriter) // Pass the typewriter instance as the thisArg parameter
      .start();
  } else {
  typewriter
    .pauseFor(1000 * index)
    .typeString(line)
    .pauseFor(1000)
    .callFunction(() => {
      setTimeout(() => {
        typewriter.pause();
        const caretElement = element.querySelector('.Typewriter__cursor');
        caretElement.style.display = 'none';
        console.log('Animation stopped');
      }, 0);
    }, typewriter) // Pass the typewriter instance as the thisArg parameter
    .start();
  }
});

// const linesOfCode = [
//   'package org.rkmvcc.nirdesh',
//   'public class Nirdesh {',
//   '    public static void main(String[] args) {',
//   '       //Get Started for the most enthusiastic coding competition',
//   '       //Initiating Nirdesh'
// ];

// linesOfCode.forEach((line, index) => {
//   const elementId = `initial-code-${index + 1}`;
//   const codeElement = document.getElementById(elementId).querySelector('.code-line');
//   const caretElement = document.getElementById(elementId).querySelector('.caret');

//   const typewriter = new Typewriter(codeElement, {
//     loop: false,
//     delay: 0,
//     onComplete: typewriter.stop() // Stop the animation after 2 seconds
//   });

//   typewriter
//     .pauseFor(1000 * index)
//     .typeString(line)
//     .pauseFor(1000)
//     .start();

// });


