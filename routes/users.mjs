/* GET users listing. */
import { Router } from "express";
import { postCollection, userCollection } from "../database.mjs";
const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const data = req.body;
    console.log(data);
    const user = await userCollection.insertOne(data);
    data["_id"] = userCollection.insertedId;
    res.send(data);
  } catch (error) {
    // next(error);
    console.error(error);
  }
});

export default router;
