const express = require('express');
const router = express.Router();

const Tratamento = require("../controllers/tratamentos.controller");

router.get("/read", Tratamento.readAll);
router.get("/profissional/:id", Tratamento.readProf);
router.post("/create", Tratamento.create);
router.put("/update", Tratamento.update);
router.delete("/delete/:id", Tratamento.del);

module.exports = router;