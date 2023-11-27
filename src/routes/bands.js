const express = require("express");
const router = express.Router();
const Band = require("../../models/Band");

router.get("/", async (req, res) => {
  const bands = await Band.findAll();

  res.json(bands);
});

router.get("/:id", async (req, res) => {
  const band = await Band.findByPk(req.params.id);

  res.json(band);
});

module.exports = router;
