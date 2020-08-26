require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const schema1Routes = require("./Routes/schema1Routes");
const schema2Routes = require("./Routes/schema2Routes");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connneted");
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/schema1", schema1Routes);
app.use("/schema2", schema2Routes);

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
