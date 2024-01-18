import "reflect-metadata";
import express, { Request, Response } from "express";
import dataSource from "./data-source";

const PORT = 3000;
const app = express();

dataSource
  .initialize() //dataSource.initialize() returns a promise
  .then(() => {
    console.log("Successfully connected with the database!");
  })
  .catch((err) => {
    console.log("DataSource connection failed", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
