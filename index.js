const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// import de mes routes
const characters = require("./routes/characters");
const CharacterId = require("./routes/characterId");
const comicsRoute = require("./routes/comics");

// Demande à mon serveur d'utiliser ces routes
app.use(characters);
app.use(comicsRoute);
app.use(CharacterId);

//
app.all("*", (req, res) => {
  res.status(400).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
