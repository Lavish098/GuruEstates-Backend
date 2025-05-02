const { User, Image } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

//Handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { lastname: "", firstname: "", email: "", password: "" };

  //incorrect email
  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }
  //incorrect password
  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }
  //duplicate error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  //validation erros
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

//create token
const maxAge = 3 * 24 * 60 * 60;

const jwtsecret = process.env.TOKEN_SECRET;

const createToken = (id) => {
  return jwt.sign({ id }, jwtsecret, {
    expiresIn: maxAge,
  });
};

const addUser = async (req, res) => {
  const { lastname, firstname, email, password, role, phone } = req.body;
  try {
    const user = await User.create({
      lastname,
      firstname,
      email,
      password,
      role,
      phone,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
};
const getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
};
const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const image = await Image.findOne({ userId: id });

    res.status(200).json({ user, image });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { lastname, firstname, email, phone, address, profileImg } = req.body;

    const userData = {
      lastname,
      firstname,
      email,
      phone,
      address,
    };

    const user = await User.findByIdAndUpdate(id, userData, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(profileImg);

    // If a new image is provided, update the image record
    if (!profileImg && !profileImg.newImageUrl && !profileImg.newPublicId) {
      console.log("No new profile image data provided.");
    } else {
      console.log(profileImg.newImageUrl);

      // Only delete the previous image if new image data is provided
      if (profileImg.newPublicId) {
        // Delete previous image record if exists
        await Image.findOneAndDelete({ userId: id });

        const public_id = profileImg.newPublicId;
        const url = profileImg.newImageUrl; // Create a new image record

        const newImage = await Image.create({ url, public_id, userId: id });

        // Update agent with reference to the new image
        user.image = newImage._id;
        await user.save();
      }
    }
    const updatedUser = await User.findById(id).populate("image");
    // console.log(updatedAgent);

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

const removeUser = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

module.exports = {
  addUser,
  getUser,
  removeUser,
  findUser,
  updateUser,
};
