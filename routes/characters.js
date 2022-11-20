const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/characters", async (req, res) => {
  // console.log(req.query);
  const limit = req.query.limit || "";
  const skip = req.query.skip || "";
  const name = req.query.name || "";

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
