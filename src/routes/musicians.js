const express = require("express");
const router = express.Router();
const Musician = require("../../models/Musician");

router.get("/", async (req, res) => {
  const musicians = await Musician.findAll();

  res.json(musicians);
});
router.get("/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);

  res.json(musician);
});

router.post("/", async (req, res) => {
  const musician = await Musician.create(req.body);

  res.json(musician);
});

//PUT

router.put("/:id", async (req, res) => {
  const updated = await Musician.update(req.body, {
    where: { id: req.params.id },
  });

  // console.log(updated);

  console.log("Updated");
  res.sendStatus(200);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Musician.destroy({
    where: { id: req.params.id },
  });

  // console.log(deleted);
  // console.log("Deleted");

  res.sendStatus(200);
});

module.exports = router;
