import express from "express";

const router = express.Router();

router.get("/hello", async (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    })
})

export default router;