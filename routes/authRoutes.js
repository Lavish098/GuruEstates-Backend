const express = require("express");
const {
  addUser,
  getUser,
  removeUser,
  findUser,
  updateUser,
} = require("../controller/userAuthController");
const {
  addAgent,
  getAgent,
  findAgent,
  updateAgent,
} = require("../controller/agentAuthController");
const router = express.Router();

router.post("/signin", getUser);
router.post("/signup", addUser);
router.get("/logout", removeUser);
router.get("/user/:id", findUser);
router.post("/user-profile/:id", updateUser);

router.post("/agent/signup", addAgent);
router.post("/agent/signin", getAgent);
router.get("/agent/property-agent/:id", findAgent);
router.post("/agent/agent-profile/:id", updateAgent);

module.exports = router;
