import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 800, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection failed!", err);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();
*/
