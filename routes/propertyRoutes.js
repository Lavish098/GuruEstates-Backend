const express = require("express");
const router = express.Router();
const {
  getProduct,
  updateProduct,
  deleteProducts,
  addProperty,
} = require("../controller/propertyController");
const multer = require("multer");

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to handle image uploads
const uploadMiddleware = upload.array("images", 10);

// router.get("/", getProducts);

// router.get("/:id", getProduct);

// router.post("/", addProduct);

// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProducts);

router.route("/").post(uploadMiddleware, addProperty);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProducts);
module.exports = router;
