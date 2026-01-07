const express = require("express");
const { classifyText } = require("../controllers/classify.controller");

const router = express.Router();

router.post("/", classifyText);

module.exports = router;
