const express = require("express");
const setupDB = require("./db/db-setup");
const Users = require("./db/models/users");

setupDB();

const app = express();
app.use(express.json());

//this should be in separate file

app.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Users.query().findById(id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(5000, () => console.log("server running on Port 5000"));
