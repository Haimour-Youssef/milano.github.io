
document.querySelector("#cookies").addEventListener("click", () => {
    document.querySelector(".cookies").style.display = "none";
});

// var x = document.getElementById("audioOin").autoplay;
document.querySelector("#audioOui").addEventListener("click", () => {
    document.getElementById("myaudio").play();
    document.querySelector(".modal").style.display = "none";
});

document.querySelector("#audioNon").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
});