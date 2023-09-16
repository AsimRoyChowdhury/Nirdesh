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