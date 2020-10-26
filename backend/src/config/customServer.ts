import "./env";
import "reflect-metadata";
import express, { Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import "./env";

import router from "../router";

// import connection
import "../database/connect";

const app = express();
//cors options
app.use((_, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  app.use(
    cors({
      origin: process.env.FRONT_URL,
      optionsSuccessStatus: 200
    })
  );
  next();
});

app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;
const start = () => console.log(`🔥 Server on http://localhost:${port}`);

app.listen(port, start);
