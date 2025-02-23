const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Hello, Docker!");
});

// Serve static files from the views directory
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
