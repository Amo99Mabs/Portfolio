// Mobile navbar toggle
const navLinks = document.querySelector(".navbar-right");
const toggleIcon = document.getElementById("theme-toggle");

toggleIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling for navbar links
document.querySelectorAll(".navbar-right a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });  
  }); 
});
// Toggle button funtion //
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode")
    ? "brightness_high"
    : "brightness_4";
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


if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (!input) return;

    addMessage("You: " + input, "user");

    // Simulated bot response with delay
    setTimeout(() => {
      addMessage("Bot: Hi recruiter! I can guide you through Amo’s portfolio highlights.", "bot");
    }, 500);

    userInput.value = "";
  });
}

    // Display user message
    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + input;
    chatLog.appendChild(userMsg);

    // Placeholder bot response
    const botMsg = document.createElement("div");
    botMsg.textContent = "Bot: Thanks for asking! I can guide you through Amo’s portfolio highlights.";
    chatLog.appendChild(botMsg);

    // Clear input
    userInput.value = "";
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
  });
}
// Allow Enter key to send message
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

