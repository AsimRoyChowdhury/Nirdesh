particlesJS("particles-js", particleConfig);

const noticeModal = document.getElementById("notice-modal");
const body = document.querySelector("body");

if(!noticeModal.classList.contains("hidden")){
          body.classList.add("overflow-hidden");
}

function hideModal(){
      noticeModal.classList.add("hidden");
      body.classList.remove("overflow-hidden");   
}

function showModal(){
          noticeModal.classList.remove("hidden");   
          body.classList.add("overflow-hidden"); 
    }