// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  document.getElementById("close-menu").addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
}

// MATRIX REACTS TO SCROLL (DEPTH EFECT)
let scrollSpeed = 1;

window.addEventListener("scroll", () => {
  scrollSpeed = 1 + window.scrollY / 800;
});

// MATRIX CYBER EFFECT
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrixCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const chars = "01$<>#";
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = `${fontSize}px JetBrains Mono`;

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.97) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(draw, 45);
});



// NEON BORDER ON SCROLL
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("neon-border", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("#skills, #projects").forEach(sec => observer.observe(sec));

// CURSOR TRAIL (CYBER GREEN)
const trail = document.getElementById("cursor-trail");

document.addEventListener("mousemove", (e) => {
  if (!trail) return;
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
});

// TYPING COMMAND ANIMATION (TERMINAL STYLE)
const commands = [
  "Deploying on AWS EC2...",
  "Integrating Cognito Auth...",
  "Docker Containers Running...",
  "Kafka Streams Active...",
  "System Status: ONLINE"
];

let cmdIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeCommand() {
  if (!typedText) return;

  if (charIndex < commands[cmdIndex].length) {
    typedText.textContent += commands[cmdIndex][charIndex++];
    setTimeout(typeCommand, 60);
  } else {
    setTimeout(() => {
      typedText.textContent = "";
      charIndex = 0;
      cmdIndex = (cmdIndex + 1) % commands.length;
      typeCommand();
    }, 1200);
  }
}

typeCommand();

// TERMINAL BOOT ANIMATION (ON PAGE LOAD)
const bootLines = [
  "Initializing system...",
  "Loading kernel modules...",
  "Mounting cloud volumes...",
  "Starting Docker services...",
  "Connecting to AWS...",
  "System Ready ✔"
];

const bootText = document.getElementById("boot-text");
const bootScreen = document.getElementById("boot-screen");
let bootLine = 0;

function bootSequence() {
  if (bootLine < bootLines.length) {
    bootText.textContent += bootLines[bootLine] + "\n";
    bootLine++;
    setTimeout(bootSequence, 500);
  } else {
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      setTimeout(() => bootScreen.remove(), 800);
    }, 800);
  }
}

bootSequence();

// CLICK RIPPLE EFFECT (NEON CYBER STYLE)
document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.id = "click-ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// GITHUB ACTIVITY TERMINAL (LIVE STYLE)
const githubLines = [
  "✔ Commit pushed: portfolio-ui-update",
  "✔ Commit pushed: matrix-effect-enhanced",
  "✔ PR merged: neon-terminal-ui",
  "✔ AWS infra docs updated",
  "✔ Kafka pipeline optimized",
  "✔ Docker build successful"
];

const githubTerminal = document.getElementById("github-terminal");
let ghIndex = 0;

function githubActivity() {
  if (!githubTerminal) return;

  if (ghIndex < githubLines.length) {
    githubTerminal.textContent += githubLines[ghIndex] + "\n";
    ghIndex++;
    setTimeout(githubActivity, 900);
  } else {
    setTimeout(() => {
      githubTerminal.textContent = "";
      ghIndex = 0;
      githubActivity();
    }, 2000);
  }
}

githubActivity();

function closeMenu() {
  document.getElementById("mobile-menu").classList.add("hidden");
}

// TYPING COMMAND ANIMATION (NAME)
const nameText = "ram waghmare";
let nameIndex = 0;

function typeName() {
  const el = document.getElementById("typing-name");
  if (!el) return;

  if (nameIndex < nameText.length) {
    el.textContent += nameText[nameIndex];
    nameIndex++;
    setTimeout(typeName, 120);
  }
}

window.addEventListener("DOMContentLoaded", typeName);
