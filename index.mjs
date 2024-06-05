import express, { json } from "express";
import Posts from "./routes/posts.mjs";
import Users from "./routes/users.mjs";
import Registers from "./routes/registers.mjs";
import cors from "cors";
import { db } from "./database.mjs";
const app = express();
const port = 3001;

app.use(json());
app.use(cors());

app.use("/posts", Posts);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", Users);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/registers", Registers);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
