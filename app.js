const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookies = require("cookie-parser");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const propertyRoute = require("./routes/propertyRoutes.js");
const authRoute = require("./routes/authRoutes.js");
const { requireAuth, checkUser } = require("./middleware/authMiddleware.js");
const { getProperties } = require("./controller/propertyController.js");
const app = express();

const port = process.env.port || 3001;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  port: port,
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

dotenv.config();

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookies());

app.use("/api/property", propertyRoute);
app.use(authRoute);

app.get("*", checkUser);
app.get("/", (req, res) => {
  res.status(200).json("welcome");
});

app.post("/image/delete", async (req, res) => {
  const { public_id } = req.body;
  console.log(public_id);

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(result);

    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/properties", getProperties);

app.get("/api/user", (req, res) => {
  console.log("load");
  console.log(res.locals.user);
  res.json({ user: res.locals.user });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, console.log(`Express is listening on ${port}`));
  })
  .catch(() => {
    console.log("Connection failed");
  });
