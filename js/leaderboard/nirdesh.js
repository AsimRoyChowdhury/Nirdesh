particlesJS("particles-js", particleConfig);


const loader = document.getElementById("loader");

window.onload = function(){
	loader.style.display = "none";
}

var leaderboardDetails = [
	{
		rank: 4,
		name: "Pritam Sarkar",
		points: "206.67",
		hackerrank: "https://www.hackerrank.com/pritamsarkar_ps1?"
	},
	{
		rank: 5,
		name: "Yuvraj Singh",
		points: "200.00",
		hackerrank: "https://www.hackerrank.com/yuvvraj567?"
	},
	{
		rank: 6,
		name: "Atul Chandra",
		points: "200.00",
		hackerrank: "https://www.hackerrank.com/atulchandra021?"
	},
    {
		rank: 7,
		name: "Shivam Das",
		points: "147.54",
		hackerrank: "https://www.hackerrank.com/shivamdas1612201?"
	},
    {
		rank: 8,
		name: "Sagnik Pal",
		points: "108.98",
		hackerrank: "https://www.hackerrank.com/sagnik2004?"
	},
    {
		rank: 9,
		name: "Soumya Chatterjee",
		points: "100.98",
		hackerrank: "https://www.hackerrank.com/soumyachatterje4?"
	},
    {
		rank: 10,
		name: "Priyankush Biswas",
		points: "90.98",
		hackerrank: "https://www.hackerrank.com/biswaspriyankush?"
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