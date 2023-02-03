const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user/:id", controllers.getUserById);
app.post("/register", controllers.register);
app.get("/login", controllers.login);

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Sever corriendo en puerto", PORT);
  db();
});

module.exports = app;
