import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import express from "express";
import { userRouter } from "./src/routes/userRoutes";
import { movieRouter } from "./src/routes/movieRouter";

const configureEnvironment = () => {
  env.config();
};

async function connectToDatabase() {
  // const connstr = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern.js49d.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const connstr = "mongodb://localhost/coding";
  console.log("initializing DATABASE connection...");
  mongoose.connection.on("error", (err: any) =>
    console.log("mongoose error : ", err.message)
  );
  await mongoose.connect(connstr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Connected to DATABASE");
}

const startServer = async () => {
  configureEnvironment();
  await connectToDatabase();

  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = app.listen(process.env.PORT);
  server.on("error", (error: any) =>
    console.log("server error : ", error.message)
  );
  app.use("/api/user", userRouter);
  app.use("/api/movies", movieRouter);
};

startServer()
  .then(() => {
    console.log("server started on port " + process.env.PORT);
  })
  .catch((error: any) => {
    console.log("error on starting server : ", error.message);
  });
