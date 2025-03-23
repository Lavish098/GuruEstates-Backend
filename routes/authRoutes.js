const express = require("express");
const {
  addUser,
  getUser,
  removeUser,
  findUser,
} = require("../controller/userAuthController");
const {
  addAgent,
  getAgent,
  findAgent,
} = require("../controller/agentAuthController");
const router = express.Router();

router.post("/signin", getUser);
router.post("/signup", addUser);
router.get("/logout", removeUser);
router.get("/user/:id", findUser);

router.post("/agent/signup", addAgent);
router.post("/agent/signin", getAgent);
router.get("/agent/property-agent/:id", findAgent);

module.exports = router;
