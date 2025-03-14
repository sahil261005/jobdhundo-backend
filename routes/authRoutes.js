const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Adjust path as needed
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ✅ Debugging logs
console.log("✅ authRoutes loaded"); // Confirming that the file is loaded

// ✅ Register Route
router.post("/register", async (req, res) => {
  try {
    console.log("🔵 Register Attempt:", req.body);

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "❌ Please fill all fields." });
    }

    let user = await User.findOne({ email });
    if (user) {
      console.log("❌ User already exists:", email);
      return res.status(400).json({ message: "❌ User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    
    // ✅ Debug log AFTER saving
    await user.save();
    console.log("✅ User saved to MongoDB:", user); // Debugging

    res.status(201).json({ message: "✅ Registration successful!" });
  } catch (error) {
    console.error("❌ Register Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



// ✅ Login Route
// ✅ Login Route
router.post("/login", async (req, res) => {
  try {
    console.log("🔵 Incoming Login Request:", req.body);

    const { email, password } = req.body;

    // ✅ Validate input fields
    if (!email || !password) {
      console.log("❌ Missing email or password:", req.body);
      return res.status(400).json({ message: "❌ Please enter both email and password." });
    }

    // ✅ Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(400).json({ message: "❌ User not found." });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid password attempt for:", email);
      return res.status(400).json({ message: "❌ Invalid credentials." });
    }

    // ✅ Generate Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login successful:", { email, token });
    res.status(200).json({ message: "✅ Login successful!", token });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "❌ Internal Server Error" });
  }
});
module.exports = router;

