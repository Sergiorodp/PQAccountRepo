import mongoose from "mongoose";

interface IprocessAtlas extends NodeJS.ProcessEnv {
  ATLAS_URI?: string
}

const env : IprocessAtlas = process.env

mongoose
  .connect(env.ATLAS_URI as string)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });