const express = require("express");
const {
  getProperty,
  uploadProperty,
} = require("../Controlers/schema2Controler");
const router = express.Router();

//Get Property
router.get("/getProperty", getProperty);

//Uplaod Property
router.post("/uploadProperty", uploadProperty);

module.exports = router;
