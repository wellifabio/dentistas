const Consulta = require("../models/Consulta");
const con = require("../dao/connection");

const readAll = (req, res) => {
    con.query(Consulta.readAll(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    });
}

module.exports = {
    readAll
};