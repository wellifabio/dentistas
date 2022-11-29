const Profissional = require("../models/Profissional");
const con = require("../dao/connection");

const readAll = (req, res) => {
    con.query(Profissional.readAll(), (err, result) => {
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