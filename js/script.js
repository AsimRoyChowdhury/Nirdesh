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
        }, typewriter) // Pass the typewriter instance as the thisArg parameter
        .start(), 1000);
    }
  }, (1000 * index)+1000);
  

  
});

const nirdeshWriting = document.querySelector('#nirdesh-writing');
const oneLiner1 = document.querySelector('#one-liner-1');
const oneLiner2 = document.querySelector('#one-liner-2');
setTimeout(() => {
  nirdeshWriting.classList.remove("hidden");
  nirdeshWriting.classList.add('tracking-in-expand');
}, 6000);
setTimeout(() => {
  oneLiner1.classList.remove("hidden");
  oneLiner1.classList.add("fade-in");
}, 7000);
setTimeout(() => {
  oneLiner2.classList.remove("hidden");
  oneLiner2.classList.add("fade-in")
}, 9500);

