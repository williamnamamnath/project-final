'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const { 
  createUser, 
  userLogin, 
  getFavorites, 
  deleteFavorite, 
  addFavorites,
  updateDescription 
} = require("./handlers");

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

//handler functions
app.post("/login", userLogin);
app.post("/signup", createUser);
app.get("/api/getFavorites", getFavorites);
app.delete("/api/deleteFavorite/:id", deleteFavorite);
app.post("/api/addFavorites", addFavorites);
app.put("/api/updateDescription", updateDescription);


//a catch-all endpoint
app.get("*", (req, res) => {
  res.status(404).json({
  status: 404,
  message: "This is not the page you're looking for!",
  });
})

app.listen(3000, () => console.log(`Listening on port 3000.`));
