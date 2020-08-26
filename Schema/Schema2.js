require("dotenv").config();

const mongoose = require("mongoose");

const Schema2 = new mongoose.Schema({
  bhk: {
    type: String,
    enum: ["1 Room set", "1Bhk", "2Bhk", "3Bhk", "4Bhk", "5Bhk", "6Bhk"],
    default: "none",
    required: true,
  },
  balconies: {
    type: String,
    enum: ["1", "2", "3", "4"],
    default: "none",
  },
  floor: {
    type: String,
    enum: ["marble", "tiles", "etalian marble"],
    required: true,
    default: "none",
  },
  washrooms: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
    required: true,
    default: "none",
  },
  rent_amount: {
    type: Number,
    required: true,
  },
  rent_deal: {
    type: String,
    enum: ["negotiable", "fixed"],
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
    default: "none",
    required: true,
  },
  select_location_region: {
    type: String,
    default: "none",
    enum: ["laxmi nagar", "saket", "nirman vihar"],
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  customer_type: {
    type: String,
    enum: ["male", "female", "live in", "indifferent"],
    default: "none",
    required: true,
  },
  tenant_type: {
    type: String,
    enum: ["under graduate", "post graduate", "working professional"],
    required: true,
    default: "none",
  },
  number_of_tenant_allowed: {
    type: Number,
    required: true,
  },
  available_from: {
    type: String,
    required: true,
  },
  owner_house: {
    type: String,
    enum: ["same building", "close by", "no interfare"],
    default: "none",
  },
  building_structure: {
    type: String,
    enum: ["Inter connected", "Square Shaped", "Rectangle Shaped"],
    default: "none",
  },
  building_type: {
    type: String,
    enum: ["Old construction", "New Construction"],
    required: true,
    default: "none",
  },
  parking: {
    type: String,
    enum: ["yes", "no"],
    default: "none",
  },
  amenities: {
    type: [String],
    enum: ["24*7 water supply", "lift", "kitchen", "biometric"],
    default: "none",
  },
  security_facilities: {
    type: String,
    enum: ["cctv", "security gaurd"],
    default: "none",
  },
  washroom_style: {
    type: String,
    enum: ["Western style", "Indian style"],
    default: "none",
    required: true,
  },
  furnishing_details: {
    type: [String],
    enum: ["sofa", "bed", "tc", "ac", "fridge"],
    default: "none",
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
});

module.exports = mongoose.model("Schema2", Schema2);
