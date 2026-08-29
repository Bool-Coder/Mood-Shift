const express = require("express");
const argon2 = require("argon2");
const crypto = require("crypto");
const Session = require("../models/Session");

const User = require("../models/User");
const router = express.Router();
const requireAuth = require("../middleware/auth");

router.get("/me", requireAuth, async (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      email: req.user.email,
      moods: req.user.moods || [],
    },
  });
});
router.post("/logout", requireAuth, async (req, res) => {
  try {
    await Session.deleteOne({
      _id: req.session._id,
    });
    res.clearCookie("session");
    res.json({
      message: "Logout succesful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists",
      });
    }
    const passwordHash = await argon2.hash(password);
    const user = await User.create({
      email: email.toLowerCase(),
      passwordHash,
    });
    res.status(201).json({
      message: "Account created succesfully",
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
    }
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const validPassword = await argon2.verify(user.passwordHash, password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const sessionToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await Session.create({
      tokenHash,
      userId: user._id,
      expiresAt,
    });
    res.cookie("session", sessionToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    });

    res.json({
      message: "Login succesful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
router.post("/logout", requireAuth);
module.exports = router;
