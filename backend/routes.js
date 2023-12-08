import express from "express"
import { factsRef } from "./db.js";

const router = express.Router();

router.get("/swiper/all-facts", async(req, res) => {
    const facts = await factsRef.find({  }).project({ _id: 0 }).toArray();

    res.status(200).json(facts);
});

export default router;