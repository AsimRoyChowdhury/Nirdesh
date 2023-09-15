particlesJS("particles-js", particleConfig);

const noticeModal = document.getElementById("notice-modal");
const body = document.querySelector("body");
const upiModal = document.getElementById("upi-modal");
const upiQR = document.querySelectorAll(".upi-qr");


// console.log(upiQR[2]);

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

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  try {
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard: ', err);
  }

  // Remove the text area from the document
  document.body.removeChild(textArea);
}

const loader = document.getElementById("loader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})