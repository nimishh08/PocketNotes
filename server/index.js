const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const noteRouter = require("./routes/notes");
const path = require("path");

const app = express();

// app.use(express.static(path.resolve(__dirname, "build")));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:80"],
  })
);
app.use(express.json());
app.use("/", noteRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
