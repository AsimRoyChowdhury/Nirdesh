particlesJS("particles-js", particleConfig);


const loader = document.getElementById("loader");

window.onload = function(){
	loader.style.display = "none";
}

var leaderboardDetails = [
	{
		rank: 1,
		name: "Asim Roy Chowdhury",
		points: "250",
		hackerrank: "https://www.hackerrank.com/asimrc2002?hr_r=1"
	},
	{
		rank: 2,
		name: "Sayan Das",
		points: "300",
		hackerrank: "https://www.hackerrank.com/asimrc2002?hr_r=1"
	},
	{
		rank: 3,
		name: "Asim Roy Chowdhury",
		points: "250",
		hackerrank: "https://www.hackerrank.com/asimrc2002?hr_r=1"
	},
];

const leaderboardTable = document.getElementById("leaderboard-table");

Object.values(leaderboardDetails).map((val) => {
	leaderboardTable.innerHTML += `
	<div class="text-center my-auto font-[montserrat] text-white text-[12px] md:text-[25px]">${val.rank}</div>
	<div class="text-center my-auto font-[montserrat] text-white text-[12px] md:text-[25px]">${val.name}</div>
	<a href="${val.hackerrank}" class="w-fit text-center my-auto mx-auto font-[montserrat] text-[10px] md:text-[18px] bg-green-700 text-green-500 hover:bg-green-900 hover:text-green-600 px-4 rounded-full">${extractName(val.hackerrank)}</a>
	<div class="text-center my-auto font-[montserrat] text-white text-[12px] md:text-[25px]">${val.points}</div>`
});

function extractName(url) {
    const startIndex = url.indexOf('.com/') + 5;
    const endIndex = url.indexOf('?', startIndex);
    if (startIndex !== -1 && endIndex !== -1) {
        return '@'+ url.substring(startIndex, endIndex);
    }
    return 'N/A';
}

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