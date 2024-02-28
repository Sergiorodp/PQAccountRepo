import mongoose from "mongoose";
import envs from "@app/config/envVars";

mongoose
  .connect(envs.ATLAS_URI as string)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });