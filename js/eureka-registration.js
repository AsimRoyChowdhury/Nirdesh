particlesJS("particles-js", particleConfig);

const noticeModal = document.getElementById("notice-modal");
const body = document.querySelector("body");
const upiModal = document.getElementById("upi-modal");
const upiQR = document.querySelectorAll(".upi-qr");

function checkNumber(){
	const phoneNumber = document.getElementById("phone-number").value;
	if(phoneNumber == ""){
    alert("Please Enter a Phone Number");
    document.getElementById("phone-number").value = "";
    document.getElementById("phone-number").focus();
    return false;
  }
  else if(isNaN(phoneNumber)){
    alert("Please Enter a Valid Phone Number");
    document.getElementById("phone-number").value = "";
    document.getElementById("phone-number").focus();
    return false;
  }
  else if(phoneNumber.length != 10){
    alert("Please enter a Valid 10 digit Phone Number");
    document.getElementById("phone-number").value = "";
    document.getElementById("phone-number").focus();
    return false;
  }
  return true;
}

if(!noticeModal.classList.contains("hidden")){
	noticeModal.firstElementChild.classList.remove("scale-down-center");
	noticeModal.classList.remove("blurred-out");
	body.classList.add("overflow-hidden");
}

function hideModal(){
	noticeModal.firstElementChild.classList.add("scale-down-center");
	noticeModal.classList.add("blurred-out");
	setTimeout(() => {
		noticeModal.classList.add("hidden");
		body.classList.remove("overflow-hidden");   
	}, 200);
}

function showModal(){
	noticeModal.firstElementChild.classList.remove("scale-down-center");
	noticeModal.classList.remove("blurred-out");
	noticeModal.classList.remove("hidden");   
	body.classList.add("overflow-hidden"); 
}

function showupiModal() {
  upiModal.classList.remove("hidden");
  upiModal.classList.remove("blurred-out");
	upiModal.firstElementChild.classList.remove("scale-down-center");
  upiModal.classList.remove("hidden");
  body.classList.add("overflow-hidden");

  if (!upiModal.classList.contains("hidden")) {
    const clickHandler = function(event) {
      let clickedOutside = true; // Flag to check if the click occurred outside the elements in upiQR
      
      upiQR.forEach(element => {
        if (event.target === element) {
          clickedOutside = false;
        }
      });
      
      if (clickedOutside) {
				upiModal.firstElementChild.classList.add("scale-down-center");
				upiModal.classList.add("blurred-out");
				setTimeout(() => {
					upiModal.classList.add("hidden");
					upiModal.classList.add("hidden");
					body.classList.remove("overflow-hidden");
				}, 200);
        window.removeEventListener("click", clickHandler);
      }
    };
    window.addEventListener("click", clickHandler);
  }
}

function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard: ', err);
  }
  document.body.removeChild(textArea);
}
const loader = document.getElementById("loader");
window.onload = function(){
	loader.style.display = "none";
}

let faq = [
  {
    id: 0,
    ques: "For this question what topics of web development would be asked?",
    ans: "Okay we will rather not ask topics from web development but it is something different and amazing, there will be some mystery detective questions , you will need to find the answers which will be hidden. for finding out the answer you will need the knowledge of web development like inspecting the page etc.",
  },
];

const faqs = document.getElementById("faqs");

Object.values(faq).map((val) => {
  faqs.innerHTML += `
  <div id="faq-div-${val.id}" onclick="expand(${val.id})" class="w-full flex flex-col border mb-4 sm:border-2 border-gray-600 rounded-lg sm:rounded-xl p-1 sm:p-4 shadow-2xl">
    <div class="w-full flex text-sm lg:text-xl font-bold text-green-700">
    ${val.id+1}) ${val.ques}
      <div id="faq-dropdown-${val.id}" class="ml-auto">
        <svg class="h-10 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </div>
    <div id="faq-ans-${val.id}" class="w-full text-justify text-xs lg:text-lg text-gray-700 hidden">
    ${val.ans}
    </div>
  </div>
  `
});


function expand(id){
  const faqDiv = document.getElementById(`faq-div-`+id);
  const faqDropdown = document.querySelector(`#faq-dropdown-${id} > svg`);
  const faqAns = document.getElementById(`faq-ans-`+id);


  if(faqAns.classList.contains("hidden")){
    faqDiv.classList.add("shadow-pop-tr");
    faqDiv.classList.remove("shadow-pop-tr-reverse");
    faqAns.classList.remove("hidden");
    faqDropdown.classList.add("rotate-180");
  } else {
    faqDiv.classList.add("shadow-pop-tr-reverse");
    faqDiv.classList.remove("shadow-pop-tr");
    faqAns.classList.add("hidden");
    faqDropdown.classList.remove("rotate-180");
  }

}
