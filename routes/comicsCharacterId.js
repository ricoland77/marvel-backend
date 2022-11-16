const express = require("express");
const router = express.Router();

router.get("/comics/:characterId", (req, res) => {
  res.json({ message: "Hello" });
});

module.exports = router;
