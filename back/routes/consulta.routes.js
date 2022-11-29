const express = require('express');
const router = express.Router();

const Consulta = require("../controllers/consultas.controller");

router.get("/read", Consulta.readAll);

module.exports = router;