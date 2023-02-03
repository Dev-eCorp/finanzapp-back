const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://eduarddd:qwerty123@cluster0.ehtmnbv.mongodb.net/auth";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB corriendo"))
    .catch((err) => console.error(err));
};

module.exports = db;
