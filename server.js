const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoute);

const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud.23okq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const databaseConfigurations = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, databaseConfigurations)
  .then((res) =>
    app.listen(port, () => console.log("Server is running on port " + port))
  )
  .catch((err) => console.log(err));
