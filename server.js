const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => console.log(err));

//init app
const app = express();

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
