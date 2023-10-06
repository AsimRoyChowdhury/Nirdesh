particlesJS("particles-js", particleConfig);

function nirdeshTimer(tick) {
	var counter = Tick.count.down('2023-10-07T09:30:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

function eurekaTimer(tick) {
	var counter = Tick.count.down('2023-10-07T12:00:00+05:30');

	counter.onupdate = function(value) {
	tick.value = value;
	};
}

var nirdeshModal = document.getElementById("nirdesh-modal")
var eurekaModal = document.getElementById("eureka-modal")

function hideNirdeshModal(){
	nirdeshModal.firstElementChild.classList.add("scale-down-center");
	nirdeshModal.classList.add("blurred-out");
	setTimeout(() => {
		nirdeshModal.classList.add("hidden");
		body.classList.remove("overflow-hidden");   
	}, 200);
}

function openNirdeshModal(){
	nirdeshModal.firstElementChild.classList.remove("scale-down-center");
	nirdeshModal.classList.remove("blurred-out");
	nirdeshModal.classList.remove("hidden");   
	body.classList.add("overflow-hidden"); 
}

function hideEurekaModal(){
	eurekaModal.firstElementChild.classList.add("scale-down-center");
	eurekaModal.classList.add("blurred-out");
	setTimeout(() => {
		eurekaModal.classList.add("hidden");
		body.classList.remove("overflow-hidden");   
	}, 200);
}

function openEurekaModal(){
	eurekaModal.firstElementChild.classList.remove("scale-down-center");
	eurekaModal.classList.remove("blurred-out");
	eurekaModal.classList.remove("hidden");   
	body.classList.add("overflow-hidden"); 
}


const loader = document.getElementById("loader");


window.onload = function(){
	loader.style.display = "none";
}