// JavaScript
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const audio = document.getElementById("audioPlayer");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playIcon.classList.remove("bx-pause");
    playIcon.classList.add("bx-play");
  } else {
    audio.play();
    playIcon.classList.remove("bx-play");
    playIcon.classList.add("bx-pause");
  }
  isPlaying = !isPlaying;
});
