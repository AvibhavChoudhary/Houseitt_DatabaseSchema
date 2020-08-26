require("dotenv").config();

const mongoose = require("mongoose");

const Schema1 = new mongoose.Schema({
  room_details: {
    type: String,
    enum: ["single", "double", "triple", "quad"],
    default: "none",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  select_location_campus: {
    type: String,
    enum: ["north", "south", "east", "west"],
    required: true,
  },
  select_location_region: {
    type: String,
    default: "none",
    enum: ["laxmi nagar", "saket", "nirman vihar"],
    required: true,
  },
  // photos: {
  //   data: Buffer,
  //   contentType: String,
  //   required: true,
  // },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "none",
    required: true,
  },
  owned_by: {
    type: String,
    enum: ["owner operated", "company operated"],
    default: "none",
    required: true,
  },
  parking: {
    type: String,
    enum: ["yes", "no"],
  },
  facilities: {
    type: [String],
    enum: ["meals", "lift", "kitchen", "biometric"],
    default: "none",
    required: true,
  },
  security_facilities: {
    type: String,
    enum: ["cctv", "security gaurd"],
    default: "none",
    required: true,
  },
  security_amount: {
    type: Number,
    required: true,
  },
  security_amount_deal: {
    type: String,
    enum: ["negotiable", "fixed"],
    default: "none",
    required: true,
  },
  lock_in_period: {
    type: Number,
    required: true,
  },
  last_entry_time: {
    type: String,
    required: true,
  },
  house_rules: {
    type: [String],
    enum: ["smoking", "alcohol", "non veg"],
    default: "none",
  },
  special_highlights: {
    type: String,
    max: 100,
  },
  photo: {
    data: [Buffer],
    contentType: String,
  },
});

module.exports = mongoose.model("Schema1", Schema1);
