const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a property title"],
    },
    address: {
      type: String,
      required: [true, "Please enter the property address"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the property price"],
      default: 0,
    },
    bedrooms: {
      type: Number,
      required: [true, "Please specify the number of bedrooms"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Please specify the number of bathrooms"],
    },
    squareFeet: {
      type: Number,
      required: false, // Optional field
    },
    propertyType: {
      type: String,
      required: [true, "Please specify the property type"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    status: {
      type: String,
      required: [true, "Please provide a status"],
    },
    images: {
      type: [String], // Array of image URLs
      required: false,
    },
    agentId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Properties", propertySchema);

module.exports = Property;
