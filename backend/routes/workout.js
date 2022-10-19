const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;