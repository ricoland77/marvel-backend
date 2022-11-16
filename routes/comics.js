const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  //   console.log(req.query);

  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.netlify.app/comics?process.env.API_KEY"
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
