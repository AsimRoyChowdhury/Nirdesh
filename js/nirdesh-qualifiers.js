particlesJS("particles-js", particleConfig);


const loader = document.getElementById("loader");

window.onload = function(){
	loader.style.display = "none";
}

var qualifierDetails = [
	{
		"reg_num": 32,
		"name": "Subhadeep Sarkar"
	},
	{
		"reg_num": 33,
		"name": "Debrup Chatterjee"
	},
	{
		"reg_num": 36,
		"name": "Soumya Chatterjee"
	},
	{
		"reg_num": 37,
		"name": "Sagnik Pal"
	}, 
	{
		"reg_num": 39,
		"name": "Priyankush Biswas"
	},
	{
		"reg_num": 41,
		"name": "Tirthankar Halder"
	},
	{
		"reg_num": 43,
		"name": "Rohan Chakraborty"
	}, 
	{
		"reg_num": 45,
		"name": "Ayush Sharma"
	},
	{
		"reg_num": 49,
		"name": "Atul Chandra"
	},
	{
		"reg_num": 51,
		"name": "Yuvraj Singh"
	},
	{
		"reg_num": 52,
		"name": "Pritam Sarkar"
	}, 
	{
		"reg_num": 54,
		"name": "Avik Tarafdar"
	}, 
	{
		"reg_num": 55,
		"name": "Masum Reza"
	}, 
	{
		"reg_num": 57,
		"name": "Shivam Das"
	}, 
	{
		"reg_num": 59,
		"name": "Jayesh Shaw"
	}, 

];

const qualifiers = document.getElementById("qualifiers");

Object.values(qualifierDetails).map((val) => {
	qualifiers.innerHTML += `
	<div class="text-center my-auto font-[montserrat] text-white text-[12px] md:text-[25px]">${val.reg_num}</div>
	<div class="text-center my-auto font-[montserrat] text-white text-[12px] md:text-[25px]">${val.name}</div>
	<hr class="col-span-2">`
});


var end = Date.now() + 3 * 1000;

(function frame() {
    confetti({
        particleCount: 3,
        angle: 60,
        spread: 100,
        origin: { x: 0 },
        colors: ["#e54058", "#60a5fa", "#fff"],
        zIndex: 10,
        resize: true,
        useWorker: true,
    });
    confetti({
        particleCount: 3,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
        colors: ["#e54058", "#60a5fa", "#fff"],
        zIndex: 10,
        resize: true,
        useWorker: true,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
})();