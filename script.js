// Play background music
const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.textContent = "⏸️ Pause Music";
  } else {
    bgMusic.pause();
    playBtn.textContent = "▶️ Play Music";
  }
});

// Confetti animation
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 75%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fill();

    c.y += c.speed;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
