class Tratamento {
    //Pattern Builder
    constructor(data) {
        this.id = data.tratamento_id;
        this.nome = data.tratamento;
        this.valor = data.valor;
        this.consulta = data.consulta_id;
    }
    static readAll() {
        return "SELECT * FROM tratamentos";
    }
    static readProf(id) {
        return `SELECT * FROM vw_tratamentos WHERE profissional_id = ${id}`;
    }
    static create(data) {
        return `INSERT INTO tratamentos VALUES(default,${data.consulta},'${data.nome}',${data.valor})`;
    }
    static update(data) {
        return `UPDATE tratamentos  SET consulta = ${data.consulta}, nome = '${data.nome}', valor = ${data.valor} WHERE id = ${data.id}`;
    }
    static delete(id) {
        return `DELETE FROM tratamentos WHERE id = ${id}`;
    }
}

module.exports = Tratamento;