require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const workoutRoutes = require("./routes/workout");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
