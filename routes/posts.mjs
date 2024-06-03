import { Router } from "express";
import { postCollection } from "../database.mjs";
const router = Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const data = req.body;
    console.log(data);
    const post = await postCollection.insertOne(data);
    data["_id"] = post.insertedId;
    res.send(data);
  } catch (error) {
    // next(error);
    console.error(error);
  }
});
export default router;
