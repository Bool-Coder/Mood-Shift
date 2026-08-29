const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  confidence: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
  detectedAt: {
    type: Date,
    default: Date.now(),
  },
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },
    moods: [moodSchema],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
