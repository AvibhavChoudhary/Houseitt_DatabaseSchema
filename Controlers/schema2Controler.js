const Schema2 = require("../Schema/Schema2");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");

exports.getProperty = (req, res) => {
  Schema2.find()
    .sort([[sortBy, "asc"]])
    .exec((err, properties) => {
      if (err || !properties) {
        return res.status(400).json({
          error: "No record found",
        });
      }
      res.json(properties);
    });
};

exports.uploadProperty = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }

    let schema2 = new Schema2(fields);

    if (file.photo) {
      if (file.photo.size > 16700000) {
        return res.status(400).json({
          err: "Image should be less than 16mb",
        });
      }
      schema1.photo.data = fs.readFileSync(file.photo.path);
      schema1.photo.contentType = file.photo.type;
    }

    console.log(schema2);
    schema1.save((err, property) => {
      if (err) {
        res.status(400).json({
          err: err.message,
        });
      }
      res.json(property);
    });
  });
};
