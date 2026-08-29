const express = require("express");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router.post("/add-mood", requireAuth, async (req, res) => {
  try {
    const { mood, confidence } = req.body;
    if (!mood || confidence === undefined) {
      return res
        .status(400)
        .json({ message: "Mood and confidence are required" });
    }
    req.user.moods.push({ mood: mood.toLowerCase(), confidence: confidence });
    await req.user.save();
    res.status(201).json({
      message: "Mood history modified succesfully",
    });
  } catch (error) {
    console.error("ADD MOOD ERROR:", error);
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
module.exports = router;
