const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const AgentSchema = mongoose.Schema({
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
    lowercase: true,
    validate: [isEmail, "Please enter a vaild email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum of 6 characters"],
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    required: [true, "Please enter a phone number"],
  },
  agency: {
    type: String,
    required: [true, "Please enter your agency"],
  },
  experience: {
    type: Number,
    required: [true, "Please enter your years of experience"],
  },
  bio: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

// Image Schema
const AgentImageSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User ",
    },
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
    secure_url: {
      type: String,
    },
  },
  { timestamps: true }
);

//fire a function before doc is saved to db
AgentSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user
AgentSchema.statics.login = async function (email, password) {
  const agent = await this.findOne({ email });
  if (agent) {
    const auth = await bcrypt.compare(password, agent.password);
    if (auth) {
      return agent;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
const Agent = mongoose.model("Agents", AgentSchema);
const AgentImage = mongoose.model("AgentImage", AgentImageSchema);

module.exports = {
  Agent,
  AgentImage,
};
