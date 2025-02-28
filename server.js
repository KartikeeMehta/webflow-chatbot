const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let botResponse = "Sorry, I don't understand.";

  if (userMessage.includes("hello")) {
    botResponse = "Hello! How can I assist you?";
  } else if (userMessage.includes("help")) {
    botResponse = "Sure! What do you need help with?";
  }

  res.json({ reply: botResponse });
});

app.listen(3001, () => console.log("Chatbot running on http://localhost:3001"));
