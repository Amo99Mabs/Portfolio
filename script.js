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
    "Hi! 👋 I'm Amza an AI assistant. Ask me about my skills, projects, experience, location, resume or contact details.",
  skills:
    "My core skills include JavaScript, Python, React, Node.js, MongoDB, Salesforce, HubSpot, HTML and CSS.",
  portfolio:
    "Take a look at my portfolio section to see projects including Agenda Task Manager and my AI Engineer portfolio.",
  projects:
    "My featured projects include Agenda Task Manager and this AI Portfolio Website.",

  contact:
    "You can reach me via email, phone or LinkedIn in the Contact section.",
  experience:
    "I have experience in software development, customer service, executive support, appointment setting and CRM systems.",
  location: "I am based in South Africa.",
  resume: "You can download my CV directly from my portfolio.",
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
    else if (input.includes("experience")) reply = botResponses.experience;
    else if (input.includes("location")) reply = botResponses.location;
    else if (input.includes("resume")) reply = botResponses.resume;
    else if (input.includes("project")) reply = botResponses.projects;

    const botMsg = document.createElement("div");
    botMsg.textContent = reply;
    botMsg.classList.add("bot");
    chatboxBody.appendChild(botMsg);

    userInput.value = "";
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
  });
}

window.addEventListener("load", () => {
  const welcomeMsg = document.createElement("div");

  welcomeMsg.classList.add("bot");

  welcomeMsg.textContent =
    "Hi! 👋 I'm AmoBot. Ask me about my skills, projects, experience, location, or contact details.";

  chatboxBody.appendChild(welcomeMsg);
});
