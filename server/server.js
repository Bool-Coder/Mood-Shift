require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/database");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const moodRoutes = require("./routes/mood");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);

app.get("/", (req, res) => {
  res.json({ message: "MoodShift API is running" });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
