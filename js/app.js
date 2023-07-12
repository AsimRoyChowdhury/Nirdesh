

particlesJS("particles-js", particleConfig);

const linesOfCode = [
  'package org.rkmvcc.nirdesh',
  'public class <span class="text-gray-200">Nirdesh {</span>',
  '    public static void <span class="text-blue-500">main</span><span class="text-gray-200">(</span>String<span class="text-gray-200">[] args) {</span>',
  '       //Get Started for the most enthusiastic coding competition',
  '       //Initiating Nirdesh',
  '       <span class="text-yellow-700">String</span> organiser =  <span class="text-green-700">"Ramakrishna Mission Vivekananda Centenary College"</span>;',
  '       <span class="text-yellow-700">System</span>.out.println(<span class="text-green-700">"Organised by \\n"</span> + organiser);'
];

// Loop through each line of code
linesOfCode.forEach((line, index) => {
  const elementId = `initial-code-${index + 1}`;
  const element = document.getElementById(elementId);
  
  // Create a new typewriter instance for each line of code element

  setTimeout(()=> {
    const typewriter = new Typewriter(element, {
      loop: false,
      delay: 0,
    });

    if(index==0){
      typewriter
        .typeString(line)
        .pauseFor(1500)
        .callFunction(() => {
          setTimeout(() => {
            typewriter.pause();
            const caretElement = element.querySelector('.Typewriter__cursor');
            caretElement.style.display = 'none';
          }, 0);
        }, typewriter) // Pass the typewriter instance as the thisArg parameter
        .start();
    } else if(index<5) {
      setTimeout(() => typewriter
        .typeString(line)
        .pauseFor(500)
        .callFunction(() => {
          setTimeout(() => {
            typewriter.pause();
            const caretElement = element.querySelector('.Typewriter__cursor');
            caretElement.style.display = 'none';
          }, 0);
        }, typewriter) // Pass the typewriter instance as the thisArg parameter
        .start(), 500);
        
    } else {
      setTimeout(() => typewriter
        .typeString(line)
        .pauseFor(1000)
        .callFunction(() => {
          setTimeout(() => {
            typewriter.pause();
            const caretElement = element.querySelector('.Typewriter__cursor');
            caretElement.style.display = 'none';
          }, 0);
          element.scrollIntoView({ behavior: 'smooth' });
        }, typewriter) // Pass the typewriter instance as the thisArg parameter
        .start(), 1000);
    }
  }, (1000 * index)+1000);
  
  
});

// const image = document.querySelector('#image');
// const blurThreshold = 500; // Adjust this value to control the blur intensity

// window.addEventListener('scroll', () => {
//   // Calculate the blur value based on the scroll position
//   const scrollPosition = window.scrollY;
//   const blurValue = Math.min(scrollPosition / blurThreshold, 1);
  
//   // Apply the blur value to the div
//   image.style.filter = `blur(${blurValue}px)`;
// });
const nirdeshWriting = document.querySelector('#nirdesh-writing');
const oneLiner1 = document.querySelector('#one-liner-1');
const oneLiner2 = document.querySelector('#one-liner-2');
const mainSection = document.querySelector('#main-section');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(6000)
  .then(() => {
    nirdeshWriting.classList.remove("hidden");
    nirdeshWriting.classList.add("tracking-in-expand");
    nirdeshWriting.scrollIntoView({ behavior: 'smooth' });
    return delay(1000);
  })
  .then(() => {
    oneLiner1.classList.remove("hidden");
    oneLiner1.classList.add("fade-in");
    oneLiner2.scrollIntoView({ behavior: 'smooth' })
    return delay(2500);
  })
  .then(() => {
    oneLiner2.classList.remove("hidden");
    oneLiner2.classList.add("fade-in");
    oneLiner2.scrollIntoView({ behavior: 'smooth' })
    return delay(1000);
  })
  .then(() => {
    mainSection.classList.remove("hidden");
    mainSection.classList.add("fade-in");
    mainSection.scrollIntoView({ behavior: 'smooth' })
  });

  window.addEventListener('scroll', function() {
    let image = document.getElementById('image');
    let num = (-image.getBoundingClientRect().y)/50;
    let offset = image.getBoundingClientRect().top;
    let blur = 0;
    
    console.log(num);
    if (offset <= 0) {
      blur = num;
    } else {
      blur = 0;
    }
  
    image.style.filter = 'blur(' + blur + 'px)';
  });
  
  
  

var rellax = new Rellax('.rellax');