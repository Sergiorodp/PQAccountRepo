import mongoose from "mongoose";

mongoose
  .connect(process.env.ATLAS_URI as string)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });