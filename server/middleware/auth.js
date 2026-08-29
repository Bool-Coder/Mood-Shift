const crypto = require("crypto");
const Session = require("../models/Session");
const User = require("../models/User");

async function requireAuth(req, res, next) {
  try {
    //console.log("COOKIES:", req.cookies);
    const sessionToken = req.cookies.session;
    if (!sessionToken) {
      console.error("Not authenticated");
      return res.status(401).json({
        message: "Not authenticated",
      });
    }
    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");
    const session = await Session.findOne({
      tokenHash,
    });
    if (!session) {
      return res.status(401).json({
        message: "Invalid session",
      });
    }
    if (session.expiresAt < new Date()) {
      await Session.deleteOne({
        _id: session._id,
      });
      return res.status(401).json({
        message: "Session expired",
      });
    }
    // console.log("Session userId:", session.userId);
    // console.log("User model collection:", User.collection.name);
    // console.log("Database:", User.db.name);

    const user = await User.findById(session.userId);

    //console.log("User found:", user);
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    req.user = user;
    req.session = session;
    next();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Authentication error",
    });
  }
}
module.exports = requireAuth;
