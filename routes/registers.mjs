/* GET users listing. */
import { Router } from "express";
import { postCollection, registerCollection } from "../database.mjs";
const router = Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const data = req.body;
    console.log(data);
    const register = await registerCollection.insertOne(data);
    data["_id"] = registerCollection.insertedId;
    console.log(register);
    res.send(data);
  } catch (error) {
    // next(error);
    console.error(error);
  }
});

export default router;
