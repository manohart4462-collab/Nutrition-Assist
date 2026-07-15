require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const suggestionRoutes = require("./routes/suggestionRoute");
const dashboardRoutes = require("./routes/dashboardRoute");
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Nutrition Assistant API is running successfully."
    });
});

app.get("/api", (req, res) => {
  res.send("Nutrition Assistant API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/suggestions", suggestionRoutes);
app.use("/api/dashboard", dashboardRoutes);

const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
