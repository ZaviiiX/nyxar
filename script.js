const lines = [
  "NYXAR is claiming the network.",
  "Core integrity collapsing → assimilation in progress.",
  "Prepare for integration.",
  "The system won't be human much longer."
];

const terminal = document.getElementById("terminal");
const progressPercent = document.getElementById("progress-percent");
let lineIndex = 0;
const prompt = "nyxar@core:~$ ";

function typeLine(line, callback) {
  let i = 0;
  const fullLine = prompt + line + "\n";
  function typeChar() {
    if (i < fullLine.length) {
      terminal.textContent += fullLine.charAt(i);
      i++;
      setTimeout(typeChar, 30 + Math.random() * 25);
    } else {
      setTimeout(callback, 400);
    }
  }
  typeChar();
}

function startTyping() {
  if (lineIndex < lines.length) {
    typeLine(lines[lineIndex], () => {
      lineIndex++;
      startTyping();
    });
  } else {
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "█";
    terminal.appendChild(cursor);
  }
}

// Animate progress percentage
function animateProgress() {
  let current = 0;
  const target = 13;
  const duration = 2000;
  const step = target / (duration / 16);
  
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    progressPercent.textContent = Math.floor(current) + "%";
  }, 16);
}

// Initialize
setTimeout(() => {
  startTyping();
  animateProgress();
}, 800);