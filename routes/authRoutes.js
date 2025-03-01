const express = require("express");
const {
  addUser,
  getUser,
  removeUser,
} = require("../controller/userAuthController");
const { addAgent, getAgent } = require("../controller/agentAuthController");
const router = express.Router();

router.post("/signin", getUser);
router.post("/signup", addUser);
router.get("/logout", removeUser);

router.post("/agent/signup", addAgent);
router.post("/agent/signin", getAgent);

module.exports = router;
