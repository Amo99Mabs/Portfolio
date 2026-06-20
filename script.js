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

// --------------------
// Chatbot functionality
// --------------------
const chatbotButton = document.getElementById("chatbot-button");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatboxBody = document.getElementById("chatbox-body");
//Chatbot info about me
const botResponses = {
  hello:
    "Hi! I’m Amo, an AI Engineer with hands-on experience in JavaScript, React, Node.js, and MongoDB.",
  skills:
    "My core skills include JavaScript, Python, React, Node.js, MongoDB, and Salesforce CRM.",
  portfolio:
    "You can explore my projects like Agenda (a to-do list app) and more in the Portfolio section.",
  contact:
    "You can reach me at mabonelaa@gmail.com or on LinkedIn: linkedin.com/in/amogelangmabonela.",
};

if (chatbotButton) {
  chatbotButton.addEventListener("click", () => {
    chatbox.classList.remove("hidden");
  });
}

if (closeChat) {
  closeChat.addEventListener("click", () => {
    chatbox.classList.add("hidden");
  });
}

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim().toLowerCase();
    if (!input) return;

    // User chatbox
    const userMsg = document.createElement("div");
    userMsg.textContent = input;
    userMsg.classList.add("user");
    chatboxBody.appendChild(userMsg);

    // Bot chatbox (suggested replies)
    let reply = "Sorry, I don’t have info on that yet.";
    if (input.includes("hello") || input.includes("hi"))
      reply = botResponses.hello;
    else if (input.includes("skill")) reply = botResponses.skills;
    else if (input.includes("portfolio")) reply = botResponses.portfolio;
    else if (input.includes("contact")) reply = botResponses.contact;

    const botMsg = document.createElement("div");
    botMsg.textContent = reply;
    botMsg.classList.add("bot");
    chatboxBody.appendChild(botMsg);

    userInput.value = "";
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
  });
}
