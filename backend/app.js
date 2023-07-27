const express = require("express");
const mongoose = require("mongoose");
const colors = require('colors')
const cors = require("cors");
const app = express();
const port = 4001;

const url = "mongodb://127.0.0.1:27017/mobileshops";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const allowedOrigins = ["http://localhost:3000"];


const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

const item = require("./Routes/item");
const signIn = require("./Routes/signin");
const signUp = require("./Routes/signup");

const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console, "Connection error:"));
dbConnection.once("open", () => {
  console.log("Connected to MongoDB!".underline.green);
});

app.use(express.json());
app.use("/item", item);
app.use("/signin", signIn);
app.use("/signup", signUp);

app.listen(port, () => {
  console.log(`Mobile Shop Backend application listening on port ${port}`.underline.cyan);
});
