particlesJS("particles-js", particleConfig);


const loader = document.getElementById("loader");

window.onload = function(){
	loader.style.display = "none";
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