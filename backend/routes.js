import express from "express"
import { factsRef, tetrisScoresRef } from "./db.js";

const router = express.Router();

router.get("/", async(req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

router.get("/swiper/randomFact", async(req, res) => {
    const facts = await factsRef.find({}).toArray();
    const randomIndex = Math.floor(Math.random() * facts.length);

    res.status(200).json(facts[randomIndex]);
});
router.get("/swiper/all-facts", async(req, res) => {
    const facts = await factsRef.find({}).project({ _id: 0 }).toArray();

    res.status(200).json(facts);
});



// *----------------------* //
// * TETRIS ROUTES
// *----------------------* //

router.post("/tetris/new-score", async(req, res) => {
    const { username, score } = req.params;
    await tetrisScoresRef.insertOne({ username, score, date: new Date() });

    res.status(200).json({ message: "Score added to leaderboard!" });
});

router.get("/tetris/get-leaderboard", async(req, res) => {
    const leaderboard = await tetrisScoresRef.find({}).toArray();

    res.status(200).json(leaderboard.slice(0, 10));
});

export default router;