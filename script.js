function showSurprise() {
    document.getElementById("surprise-message").classList.remove("hidden");
    document.getElementById("bear").classList.remove("hidden");
}
// Music Control
let isPlaying = false;
const music = document.getElementById("valentine-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "Play Music 🎵";
    } else {
        music.play();
        musicBtn.innerText = "Pause Music ⏸️";
    }
    isPlaying = !isPlaying;
}
