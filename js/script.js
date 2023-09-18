// import Swiper from 'swiper';

particlesJS("particles-js", particleConfig);

const linesOfCode = [
  'package org.rkmvcc.nirdesh',
  'public class <span class="text-gray-200">Nirdesh {</span>',
  '   public static void <span class="text-blue-500">main</span><span class="text-gray-200">(</span>String<span class="text-gray-200">[] args) {</span>',
  '       //Get Started for the most enthusiastic coding competition',
  '       //Initiating Nirdesh',
  '       <span class="text-yellow-700">String</span> organiser =  <span class="text-green-700">"Ramakrishna Mission Vivekananda Centenary College"</span>;',
  '       <span class="text-yellow-700">System</span>.out.println(<span class="text-green-700">"Organised by \\n"</span> + organiser);',
  '    }',
  '}'
];

const codeText = document.querySelectorAll(".code-text");

// Loop through each line of code
linesOfCode.forEach((line, index) => {
    // Create a new typewriter instance for each line of code element

  setTimeout(()=> {
    const typewriter = new Typewriter(codeText[index], {
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
            const caretElement = codeText[index].querySelector('.Typewriter__cursor');
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
            const caretElement = codeText[index].querySelector('.Typewriter__cursor');
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
          const caretElement = codeText[index].querySelector('.Typewriter__cursor');
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
const mainSection = document.querySelector('#fixed-div');

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
    oneLiner1.scrollIntoView({ behavior: 'smooth' });
    return delay(3000);
  })
  .then(() => {
    oneLiner2.classList.remove("hidden");
    oneLiner2.classList.add("fade-in");
    oneLiner2.scrollIntoView({ behavior: 'smooth' });
  })
  .then(() => {
    mainSection.classList.remove("hidden");
    mainSection.classList.add("fade-in");
    document.body.style.height = '800vh';
  });
  
window.addEventListener('scroll', function() {
  let fixedDiv = document.getElementById('fixed-div');
  let heroSection = document.getElementById('hero-section');
  let aboutUs = document.getElementById('about-us');
  let image = document.getElementById('image');
  let aboutUsPara = document.getElementById('about-us-para');
  let aboutUsSection = document.getElementById('about-us-section');
  let timeline = document.getElementById('timeline');
  let codingImage = document.getElementById('coding-image');
  const mediaQuerySmall = window.matchMedia("screen and (max-width: 700px)");
  const mediaQueryMedium = window.matchMedia("screen and (min-width: 700px) and (max-width: 800px)");
  let blur = 0;

  if (window.scrollY / 500 > 2) {
    blur = ((window.scrollY / 500) - 2) * 10;       //Creating a number to control the overall behaviour of the components in the fixed div
  } else {
    blur = 0;
  }
  
  if (heroSection.getBoundingClientRect().bottom + 25 < 0) {
    fixedDiv.classList.add('fixed');        //Fixing the div so that it stays snapped to the viewport
    if(mediaQuerySmall.matches){           //Executes only if the screen width is less than 700px
      if(blur < 8){
        aboutUs.style.opacity = blur/8;
        aboutUs.style.transform = "translateY(" + - (blur) + "vh)";
        aboutUs.style.transition = "transform";
        aboutUs.style.transitionTimingFunction = "ease-in-out";

        aboutUsPara.style.opacity = blur/8;
        aboutUsPara.style.transform = "translateY(" + (blur) + "vh)";
        aboutUsPara.style.transitionTimingFunction = "ease-in-out";
        aboutUsPara.style.transition = "all";
        image.style.filter = 'blur(' + blur + 'px)';
        if(Math.pow(blur, (1/4)) > 1) image.style.scale = Math.pow(blur, (1/4));

        aboutUsPara.classList.remove("hidden");
        aboutUs.classList.remove("hidden");
      } else if (blur > 12 && blur <= 20) {
        aboutUsSection.classList.remove('hidden');
        timeline.classList.add('hidden');

        aboutUs.style.opacity = 1/(blur - 11);
        aboutUs.style.transform = "translateY(" + - (blur - 4) + "vh)";
        aboutUs.style.transitionTimingFunction = "ease-in-out";
        aboutUs.style.transition = "all";

        aboutUsPara.style.opacity = 1/(blur - 11);
        aboutUsPara.style.transform = "translateY(" + (blur - 4) + "vh)";
        aboutUsPara.style.transitionTimingFunction = "ease-in-out";
        aboutUsPara.style.transition = "all";

        aboutUsSection.style.opacity = 1/(blur - 11);

        aboutUs.classList.remove("hidden");
        aboutUsPara.classList.remove("hidden");;
      } else if (blur > 20) {
        timeline.classList.remove('hidden');
        aboutUsSection.classList.add('hidden');
        
        timeline.style.opacity = (blur-20)/2 ;
        
        
        aboutUs.classList.add("hidden");
        aboutUsPara.classList.add("hidden");
      } else {
        aboutUs.classList.remove('hidden');
        aboutUsPara.classList.remove('hidden');
      }
    } else {                                              //Executes when the screen width is more than 800px
      blur = (blur / 4) - 1.5;                            //Adjustifying the blur number because of the bigger screen which is why bigger scroll value is required
      if(blur < 4){
        aboutUs.style.opacity = blur/4;
        aboutUs.style.transform = "translateY(" + - (blur * 3) + "vh)";
        aboutUs.style.transition = "transform";
        aboutUs.style.transitionTimingFunction = "ease-in-out";

        aboutUsPara.style.opacity = blur/4;
        aboutUsPara.style.transform = "translateY(" + (blur * 3) + "vh)";
        aboutUsPara.style.transitionTimingFunction = "ease-in-out";
        aboutUsPara.style.transition = "all";

        image.style.filter = 'blur(' + blur + 'px)';
        if(Math.pow(blur, (1/4)) > 1) image.style.scale = Math.pow(blur, (1/4));

        aboutUsPara.classList.remove("hidden");
        aboutUs.classList.remove("hidden");
      } else if (blur > 8 && blur <= 12) {
        aboutUsSection.classList.remove('hidden');
        timeline.classList.add('hidden');

        aboutUs.style.opacity = 1/(blur - 7);
        aboutUs.style.transform = "translateY(" + - (blur - 4) * 3 + "vh)";
        aboutUs.style.transitionTimingFunction = "ease-in-out";
        aboutUs.style.transition = "all";

        aboutUsPara.style.opacity = 1/(blur - 7);
        aboutUsPara.style.transform = "translateY(" + (blur - 4) * 3 + "vh)";
        aboutUsPara.style.transitionTimingFunction = "ease-in-out";
        aboutUsPara.style.transition = "all";

        aboutUsSection.style.opacity = 1/(blur - 7);

        aboutUs.classList.remove("hidden");
        aboutUsPara.classList.remove("hidden");
      } else if (blur > 12) {
        timeline.classList.remove('hidden');
        aboutUsSection.classList.add('hidden');
        
        timeline.style.opacity = (blur-12)/2 ;
        codingImage.style.opacity = Math.min((blur-12)/2, 0.5) ;
        
        
        aboutUs.classList.add("hidden");
        aboutUsPara.classList.add("hidden");
      } 
    }
  } else if (heroSection.getBoundingClientRect().bottom >= 0) {
    fixedDiv.classList.remove('fixed');
    aboutUsPara.classList.add("hidden");
    aboutUs.classList.add("hidden");
  }

});

function nirdeshAnnouncement(tick) {
	var counter = Tick.count.down('2023-09-15T00:00:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

function registrationStart(tick) {
	var counter = Tick.count.down('2023-09-17T00:00:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

function registrationEnd(tick) {
	var counter = Tick.count.down('2023-10-05T00:00:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

function contestStarts(tick) {
	var counter = Tick.count.down('2023-10-07T09:30:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

function prizeDistribution(tick) {
	var counter = Tick.count.down('2023-10-07T17:00:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}
