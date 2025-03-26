const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: [true, "Please enter a lastname"],
  },
  firstname: {
    type: String,
    required: [true, "Please enter a firstname"],
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true,
    lowercases: true,
    validate: [isEmail, "Please enter a vaild email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum of 6 characters"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter a phone number"],
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
});

//fire a function before doc is saved to db
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user
UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
const User = mongoose.model("User", UserSchema);

module.exports = User;
