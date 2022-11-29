const express = require('express');
const router = express.Router();

const Profissional = require("../controllers/profissionais.controller");

router.get("/read", Profissional.readAll);

module.exports = router;