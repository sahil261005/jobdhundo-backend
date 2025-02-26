require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Enable JSON Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Support URL-encoded data

// ✅ CORS Configuration (Allow JSON Requests)
app.use(
  cors({
    origin: ["https://jobdhundo-frontend-web.vercel.app", "https://jobdhundo-backend-1.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // Ensure JSON headers are allowed
    credentials: true,
  })
);

// ✅ Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

// ✅ Error Handling Middleware (Debugging)
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 10000;
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`✅ Route: ${r.route.path}`);
  }
});
// Ensure fallback port
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

