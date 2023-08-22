//import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//port
const port = process.env.PORT || 3000;

//listener
const server = app.listen(port, () =>
  console.log(`Niggana ang server sa port ${port}`)
);

//database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED IMONG DATABASE"))
  .catch((error) => console.log("HALA! IMONG DATABASE NAG ERROR", error));

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRoutes = require("./routes/test");
app.use("/api", testRoutes);
