const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const testRoutes = require("./routes/test");
require("dotenv").config();


const app = express();
const server = app.listen(port, () =>
  console.log(`Niggana ang server sa port ${port}`)
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED IMONG DATABASE"))
  .catch((error) => console.log("HALA! IMONG DATABASE NAG ERROR", error));

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use("/api", testRoutes);
