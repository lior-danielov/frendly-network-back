var express = require('express');
var router = express.Router();

/* GET users listing. */
import { Router } from "express";
import { postCollection } from "../database.mjs";
const router = Router();

router.register("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const data = req.body;
    console.log(data);
    const register = await registerCollection.insertOne(data);
    data["_id"] = register.insertedId;
    console.log(register);
    res.send(data);
  } catch (error) {
    // next(error);
    console.error(error);
  }
});

module.exports = router;
