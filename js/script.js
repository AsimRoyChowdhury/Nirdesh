particlesJS("particles-js", particleConfig);

const loader = document.getElementById("loader");
let visited = false;

const nirdeshWriting = document.querySelector('#nirdesh-writing');
const oneLiner1 = document.querySelector('#one-liner-1');
const oneLiner2 = document.querySelector('#one-liner-2');
const mainSection = document.querySelector('#fixed-div');
const codeText = document.querySelectorAll(".code-text");
const mediaQuerySmall = window.matchMedia("screen and (max-width: 700px)");

const linesOfCode = [
  'package org.rkmvcc.nirdesh',
  'public class <span class="text-gray-200">Nirdesh {</span>',
  '   public static void <span class="text-blue-500">main</span><span class="text-gray-200">(</span>String<span class="text-gray-200">[] args) {</span>',
  '       //Get Started for the most enthusiastic coding competition',
  '       //Initiating Nirdesh',
  '       <span class="text-yellow-700">String</span> dept =  <span class="text-green-700">"Department of Computer Science"</span>;',
  '       <span class="text-yellow-700">String</span> organiser =  <span class="text-green-700">"Ramakrishna Mission Vivekananda Centenary College"</span>;',
  '       <span class="text-yellow-700">System</span>.out.println(<span class="text-green-700">"Organised by \\n"</span> + dept + <span class="text-green-700">"\\n"</span> organiser);',
  '    }',
  '}'
];

window.onload = function(){
  loader.style.display = "none";

  if(sessionStorage.getItem('visited')){
    linesOfCode.forEach ((line, index) => {
      codeText[index].innerHTML = line;
    });
    nirdeshWriting.classList.remove("hidden");
    oneLiner1.classList.remove("hidden");
    oneLiner2.classList.remove("hidden");
    mainSection.classList.remove("hidden");
    if(mediaQuerySmall.matches){
      document.body.style.height = '700vh';
    } else {
      document.body.style.height = '1100vh';
    }
  } else {
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
    }, (1000 * index)+1500);
  
  
    });
  
  
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
      if(mediaQuerySmall.matches){
        document.body.style.height = '700vh';
      } else {
        document.body.style.height = '1100vh';
      }
    });
  }

  sessionStorage.setItem('visited', 'true');
}



window.addEventListener('scroll', function() {
  const fixedDiv = document.getElementById('fixed-div');
  const heroSection = document.getElementById('hero-section');
  const aboutUs = document.getElementById('about-us');
  const image = document.getElementById('image');
  const aboutUsPara = document.getElementById('about-us-para');
  const aboutUsSection = document.getElementById('about-us-section');
  const timeline = document.getElementById('timeline');
  const team = document.getElementById("team");
  const rewards = document.getElementById("rewards");
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
      } else if (blur > 20 && blur <= 40) {
        timeline.classList.remove('hidden');
        aboutUsSection.classList.add('hidden');
        
        timeline.style.opacity = (blur-20)/2 ;
        
        
        aboutUs.classList.add("hidden");
        aboutUsPara.classList.add("hidden");
      } else if (blur > 40 && blur <= 44) {
        team.classList.add('hidden');
        timeline.classList.remove('hidden');
        
        timeline.style.opacity = 1/(blur-40);
      } else if (blur > 46 && blur <= 66) {
        team.classList.remove('hidden');
        timeline.classList.add('hidden');

        team.style.opacity = (blur-46)/2;
      }else if(blur > 66 && blur <= 72){
        rewards.classList.add('hidden');
        team.classList.remove('hidden');

        team.style.opacity = 1/(blur-66);
      } else if(blur > 72){
        rewards.classList.remove('hidden');
        team.classList.add('hidden');

        rewards.style.opacity = (blur-72)/2;
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
      } else if (blur > 12 && blur <= 20) {
        timeline.classList.remove('hidden');
        aboutUsSection.classList.add('hidden');
        
        timeline.style.opacity = (blur-12)/2 ;
        
        
        aboutUs.classList.add("hidden");
        aboutUsPara.classList.add("hidden");
      } else if (blur > 20 && blur <= 24){
        team.classList.add('hidden');
        timeline.classList.remove('hidden');
        
        timeline.style.opacity = 1/(blur-19);
      } else if(blur > 24 && blur <= 32){
        timeline.classList.add('hidden');
        team.classList.remove('hidden');

        team.style.opacity = (blur-24)/2;
      } else if(blur > 32 && blur <= 38){
        rewards.classList.add('hidden');
        team.classList.remove('hidden');

        team.style.opacity = 1/(blur-32);
      } else if(blur > 38){
        rewards.classList.remove('hidden');
        team.classList.add('hidden');

        rewards.style.opacity = (blur-34)/2;
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

let teamDetails = [
  {
      id: 0,
      name: "Dr. Chayan Halder",
      avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/20/Chayan-Halder_uid_64187a2ec9ce0.jpg",
      desc: "Organizing Head",

      socialLink1: "#",

      socialLink2: "#",

      socialLink3: "#",
  },
  {
    id: 1,
    name: "Prasenjit Das",
    avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/09/19/download_uid_6509e1f246ee2.jpg",
    desc: "Organizing Head",

    socialLink1: "#",

    socialLink2: "#",

    socialLink3: "#",
  },
  {
      id: 3,
      name: "Jishnu Bandyopadhyay",
      avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Jishnu_uid_6414962903dff.jpeg",
      desc: "Eureka Question Setter",

      socialLink1: "https://github.com/TheRealJishnu",

      socialLink2: "https://www.linkedin.com/in/jishnu-bandyopadhyay-051353246/",

      socialLink3: "https://www.hackerrank.com/therealjishnu",
  },
  {
      id: 4,
      name: "Darpan Bhattacharya",
      avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Darpan_uid_64149629daefa.jpeg",
      desc: "Nirdesh Question Setter",

      socialLink1: "https://github.com/darpan-b",

      socialLink2: "http://in.linkedin.com/in/darpan-bhattacharya-b79811247",

      socialLink3: "http://hackerrank.com/winxtron",
  },
  {
      id: 5,
      name: "Bitan Majumder",
      avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Bitan_uid_6414962a694a6.jpeg",
      desc: "Organizer",

      socialLink1: "https://github.com/bitanM",

      socialLink2: "https://www.linkedin.com/in/bitan-majumder-672801237",

      socialLink3: "https://www.hackerrank.com/bitanmajumder201",
  },
  {
    id: 6,
    name: "Sayan Das",
    avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/18/pci_uid_6415d3080cc88.jpg",
    desc: "Designer",

    socialLink1: "https://github.com/SayanDasDev",

    socialLink2: "https://www.linkedin.com/in/das-sayan/",

    socialLink3: "https://www.hackerrank.com/SayanDasDev",  
},
  {
      id: 1,
      name: "Asim Roy Chowdhury",
      avatar: "https://avatars.githubusercontent.com/u/85804741",
      desc: "Front End Developer",

      socialLink1: "https://github.com/AsimRoyChowdhury",

      socialLink2: "https://www.linkedin.com/in/asim-roy-chowdhury-b6a630233/",

      socialLink3: "https://www.hackerrank.com/asimrc2002",  
  },
  {
      id: 7,
      name: "Bijit Mondal",
      avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Bijit_uid_641496a7a8e4d.jpg",
      desc: "Eureka Platform Developer",

      socialLink1: "https://github.com/Bijit-Mondal",

      socialLink2: "https://www.linkedin.com/in/bijit-mondal-3b196721b",
      socialLink3: "https://www.hackerrank.com/bijitmondal567",
  }
];

const teamMembersDiv = document.getElementById("team-members-div");
// const teamMembers = document.getElementById("team-members");

Object.values(teamDetails).map((val) => {
  teamMembersDiv.innerHTML += `
      <div id="team-members" class="min-w-[250px] sm:min-w-[350px] my-auto h-fit flex flex-col text-center items-center backdrop-blur-[2px] bg-gray-900 bg-opacity-10 border-2 border-orange-400 py-8 px-4 rounded-xl group hover:backdrop-blur-[4px] hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
      <div class="group-hover:border-white group-hover:rounded-full transition-all flex items-center mb-4 justify-center rounded-lg w-40 h-40 overflow-hidden border-2 border-orange-800 duration-300">
        <img class="w-full h-full" src="${val.avatar}">
      </div>
      <div class="font-[Plutur] font-bold text-xl sm:text-2xl text-orange-500 underline underline-offset-4 group-hover:tracking-wider transition-all duration-300">${val.name}</div>
      <div class="text-white italic p-4 text-sm select-none">                            </div>
      <div class="font-bold tracking-wider text-orange-800 text-sm font-[nusar] uppercase border border-orange-800 rounded-full px-4 pb-1 pt-2 bg-orange-300 group-hover:text-gray-300 group-hover:bg-orange-800 group-hover:border-gray-300">${val.desc}</div>
      <div class="flex w-full mt-4 gap-x-4 items-center justify-center group-hover:gap-x-10 transition-all duration-300">
        <a href="${val.socialLink1}" class="w-[20%] sm:w-[15%] p-2 bg-gray-300 rounded-lg hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-700 hover:text-white hover:scale-110 transition-all duration-200"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.04"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></a>
        <a href="${val.socialLink2}" class="w-[20%] sm:w-[15%] p-2 bg-gray-300 rounded-lg hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-700 hover:text-white hover:scale-110 transition-all duration-200"><svg  fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 283.9 256 235.1" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="-264.4" y="359.3" width="49.9" height="159.7"></rect> <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path> <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path> </g> </g></svg></a>
        <a href="${val.socialLink3}" class="w-[20%] sm:w-[15%] p-2 bg-gray-300 rounded-lg hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-700 hover:text-white hover:scale-110 transition-all duration-200"><svg viewBox="0 0 54 53" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9053 52.4213C13.1172 52.2637 11.3169 51.8213 9.6136 51.2454C4.58253 49.53 1.87907 45.8507 1.31536 40.6498C0.915293 36.9523 0.721327 33.2305 0.497047 29.5087C0.272767 25.8172 0 22.1257 0 18.4342C0 15.2943 0.375813 12.1545 1.63053 9.20854C3.04893 5.89287 5.50387 3.65613 8.83773 2.359C11.5048 1.32247 14.3113 0.983 17.1239 0.655674C22.5187 0.0373937 27.9256 -0.186879 33.3446 0.170747C37.6059 0.449581 41.8429 0.952694 45.7829 2.72873C48.4257 3.92287 50.2988 5.91107 51.2323 8.7236C52.2749 11.8514 52.6628 15.0822 52.9295 18.3433C53.3356 23.3623 53.4447 28.3873 53.2144 33.4184C53.0568 36.7825 52.5113 40.074 51.1717 43.1653C49.0743 48.0085 45.6314 51.3667 40.2427 52.2395C38.3636 52.5426 36.4421 52.6457 34.5387 52.6941C31.7141 52.7669 28.8833 52.7123 26.0526 52.7123L14.9053 52.4213ZM27.5498 48.5419C31.514 48.3662 35.0419 48.2449 38.5697 48.0328C41.3398 47.8691 43.625 46.6871 45.3647 44.4807C47.7529 41.4499 48.5349 37.8675 48.7652 34.1639C49.141 28.1145 48.9531 22.0711 48.2803 16.0459C48.0378 13.8699 47.7045 11.7301 46.4679 9.83893C46.1405 9.3358 45.8799 8.7842 45.5769 8.26293C44.7888 6.9112 43.7644 5.70493 42.243 5.29273C38.8727 4.3714 35.3995 3.92287 31.9141 3.92893C28.0468 3.935 24.1674 4.01987 20.3183 4.34107C17.4149 4.58353 14.5235 5.14727 11.6745 5.77767C8.14067 6.5596 6.07367 8.96607 5.17053 12.3969C4.23093 15.9732 4.237 19.6283 4.45527 23.2895C4.6674 26.7871 4.9462 30.2845 5.20687 33.7821C5.3766 36.0006 5.4918 38.2252 5.7706 40.4316C6.207 43.8079 8.00127 46.184 11.3412 47.1478C12.9353 47.6085 14.5901 48.0146 16.2329 48.1177C20.1425 48.3662 24.0583 48.4207 27.5498 48.5419Z"/>
          <path d="M20.2943 37.8553C20.5974 36.6551 20.8277 35.6429 21.1066 34.6488C22.9796 27.9205 24.8647 21.1921 26.7378 14.4577C26.8893 13.9243 26.9984 13.3727 27.1499 12.8393C27.4833 11.6633 28.5926 11.0027 29.6534 11.33C30.7384 11.6633 31.2718 12.7787 30.9263 13.9607C28.8229 21.1557 26.7256 28.3508 24.6162 35.5398C24.3434 36.4673 24.0525 37.3947 23.6706 38.2797C23.1614 39.4677 21.8582 39.8496 21.0096 39.0677C20.658 38.7403 20.4944 38.2069 20.2943 37.8553Z"/>
          <path d="M11.2808 25.0657C12.2627 25.8718 13.1295 26.6053 14.0206 27.2963C15.1662 28.1813 16.3482 29.0299 17.4999 29.9088C18.2334 30.4665 18.591 31.2121 18.3424 32.1334C18.0272 33.3215 16.627 33.9701 15.5481 33.2609C12.881 31.5091 10.1715 29.7937 8.05603 27.3509C7.60136 26.8235 7.2983 26.1143 7.10436 25.4354C6.88003 24.6353 7.20736 23.8897 7.8499 23.3623C10.4079 21.259 12.978 19.1677 15.5663 17.1007C16.0694 16.7007 16.6634 16.3794 17.2574 16.1309C18.203 15.7369 19.1305 16.0521 19.5245 16.8159C19.9185 17.5796 19.6457 18.3615 18.8213 19.0162C16.3543 20.9923 13.8933 22.9744 11.2808 25.0657Z"/>
          <path d="M41.5942 25.0291C40.2182 23.9987 38.8968 22.9925 37.5572 22.0045C36.5631 21.271 35.5387 20.58 34.5688 19.8223C33.8354 19.2525 33.6838 18.3311 34.1203 17.6159C34.5749 16.8764 35.4902 16.6218 36.357 17.0219C36.6419 17.1552 36.9026 17.331 37.1572 17.5129C38.3149 18.3493 39.4787 19.1737 40.6122 20.0405C42.0124 21.1134 43.4006 22.2045 44.7704 23.3198C46.007 24.326 46.0979 25.5626 44.8856 26.587C41.8427 29.1631 38.7513 31.6908 35.6478 34.1882C34.6598 34.9823 33.4596 34.7883 32.8352 33.8791C32.2291 32.9941 32.4898 31.9151 33.496 31.1635C35.9751 29.3147 38.4543 27.4599 40.9274 25.605C41.1396 25.4535 41.3275 25.2655 41.5942 25.0291Z"/>
          </svg>
          
          </a>
      </div>
    </div>
  `
});

// const clone = teamMembers.cloneNode(true);

// for (let i = 0; i < 10; i++) {
//     const clone = teamMembers.cloneNode(true);
//     clone.id = "team-member-"+i;  // Clone each element
//     teamMembersDiv.appendChild(clone);  // Append the cloned element
// }


