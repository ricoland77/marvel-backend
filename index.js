const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(express.json());

// import de mes routes
const comicsRoute = require("./routes/comics");
const comicsCharacterId = require("./routes/comicsCharacterId");
// Demande à mon serveur d'utiliser ces routes
app.use(comicsRoute);
app.use(comicsCharacterId);

// app.get("/characters", (req, res) => {
//   res.json({ message: "Hello" });
// });

// app.get("/character/:characterId", (req, res) => {
//   res.json({ message: "Hello" });
// });

app.all("*", function (req, res) {
  res.status(400).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
