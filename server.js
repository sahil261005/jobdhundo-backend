require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Enable JSON Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Support URL-encoded data

// ✅ CORS Configuration
app.use(
  cors({
    origin: ["https://jobdhundoweb.vercel.app/", "https://jobdhundo-backend-1.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
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
console.log("✅ authRoutes loaded");

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

// ✅ Debug: Print All Registered Routes
app._router.stack.forEach((middleware) => {
  if (middleware.route) { 
    console.log(`✅ Route: ${middleware.route.path}`);
  } else if (middleware.name === 'router') {
    middleware.handle.stack.forEach((nestedRoute) => {
      if (nestedRoute.route) {
        console.log(`✅ Nested Route: ${Object.keys(nestedRoute.route.methods).join(', ').toUpperCase()} ${nestedRoute.route.path}`);
      }
    });
  }
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ message: "Internal Server Errors" });
});

// ✅ Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
