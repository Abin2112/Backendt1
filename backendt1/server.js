const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const alertRoutes = require("./routes/alert");
const calendarRoutes = require("./routes/calendar");
const dashboardRoutes = require("./routes/dashboard");
const noticeRoutes = require("./routes/notice");

dotenv.config();

const app = express();

// ✅ CORS Configuration
const corsOptions = {
  origin: "https://task-phi-rose.vercel.app", 
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/alert", alertRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notice", noticeRoutes);

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Task Management Backend API! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
