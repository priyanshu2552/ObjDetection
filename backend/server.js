require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['https://objdetection-3.onrender.com']
}));
app.use(express.json());
app.use(express.static("uploads"));

// Routes
const detectRoutes = require("./routes/detect");
app.use("/api/detect", detectRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ [SERVER ERROR] -", err.message);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
});

app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});
