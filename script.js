// Mobile navbar toggle
const navLinks = document.querySelector(".navbar-right");
const menuIcon = document.getElementById("menu-toggle");

if (menuIcon && navLinks) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Dark mode toggle 
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleButton.innerText = body.classList.contains("dark-mode")
      ? "brightness_high"
      : "brightness_4";
  });
}

// Smooth scrolling for navbar links
document.querySelectorAll(".navbar-right a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Chatbot functionality
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.classList.add(type);
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
}

if (sendBtn && userInput && chatLog) {
  sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (!input) return;

    addMessage("You: " + input, "user");

    // Typing indicator
    const typingMsg = document.createElement("div");
    typingMsg.textContent = "Bot is typing...";
    typingMsg.classList.add("bot");
    typingMsg.id = "typing";
    chatLog.appendChild(typingMsg);

    // Simulated bot response with delay
    setTimeout(() => {
      const typingEl = document.getElementById("typing");
      if (typingEl) typingEl.remove();
      addMessage("Bot: Hi recruiter! I can guide you through Amo’s portfolio highlights.", "bot");
    }, 1000);

    userInput.value = "";
  });

  // Allow Enter key to send message
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
}