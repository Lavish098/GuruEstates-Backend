const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookies = require("cookie-parser");
const dotenv = require("dotenv");
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
app.get("/add-product", requireAuth, (req, res) => {
  res.status(200).json();
});
app.get("/login", (req, res) => {
  res.status(200).json();
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
