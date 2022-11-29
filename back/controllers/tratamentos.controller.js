const Tratamento = require("../models/Tratamento");
const Composite = require("../models/Composite");
const con = require("../dao/connection");

const create = (req, res) => {
    con.query(Tratamento.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json({ id: result.insertId }).end();
        } else {
            res.json(err).end();
        }
    });
}

const readAll = (req, res) => {
    con.query(Tratamento.readAll(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    });
}

const readProf = (req, res) => {
    con.query(Tratamento.readProf(req.params.id), (err, result) => {
        if (err == null) {
            //Pattern de Estrutura Composite + Criação Factory + Criação Builder
            res.json(Composite.profissional(result)).end();
        } else {
            res.json(err).end();
        }
    });
}

const update = (req, res) => {
    con.query(Tratamento.update(req.body), (err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).json(err).end();
        }
    });
}

const del = (req, res) => {
    con.query(Tratamento.delete(req.params.id), (err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).json(err).end();
        }
    });
}

module.exports = {
    create,
    readAll,
    readProf,
    update,
    del
}