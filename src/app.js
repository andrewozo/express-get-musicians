const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { Band } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians

app.use(express.json());
app.use(express.urlencoded());

app.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();

  res.json(musicians);
});
app.get("/musicians/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);

  res.json(musician);
});
app.get("/bands", async (req, res) => {
  const bands = await Band.findAll();

  res.json(bands);
});

app.post("/musicians", async (req, res) => {
  const musician = await Musician.create(req.body);

  res.json(musician);
});

//PUT

app.put("/musicians/:id", async (req, res) => {
  const updated = await Musician.update(req.body, {
    where: { id: req.params.id },
  });

  // console.log(updated);

  console.log("Updated");
  res.sendStatus(200);
});

app.delete("/musicians/:id", async (req, res) => {
  const deleted = await Musician.destroy({
    where: { id: req.params.id },
  });

  // console.log(deleted);
  // console.log("Deleted");

  res.sendStatus(200);
});

module.exports = app;

//
