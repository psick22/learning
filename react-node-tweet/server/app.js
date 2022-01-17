import express from "express";
import cors from "cors";
import morgan from "morgan"; // debugging
import helmet from "helmet";
import "express-async-errors";
import tweetRoute from "./router/tweet.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
