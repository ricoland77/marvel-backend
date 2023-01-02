const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/character/:id", async (req, res) => {
  // console.log(req.query);
  try {
    const idCharacter = req.params.id;
    // console.log(req.params.id);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${idCharacter}?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
