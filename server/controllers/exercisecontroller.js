// exercise log
const express = require("express");
const exercises = require("../models/Exercises");

const router = express.Router();

router
    .get("/allexercise", async function(req, res) {
        let data = await exercises.all();
        res.send(data);
    })
    .post("/postexercise", (req, res) => {
        res.send(exercises.postExercise(req.body.newexercise));

    })

    .post("/getvalue", (req, res) => {
        console.log(req.body.inputvalue)

        res.send(exercises.postExercise())
    })

module.exports = router;