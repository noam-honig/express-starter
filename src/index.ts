import express from "express";
import { remultExpress } from "remult/remult-express";
import { Task } from "./entities/task";

const app = express();
app.use(
  remultExpress({
    entities: [Task],
  })
);
app.listen(3000, () => console.log("Started"));
