class Profissional {
    
    //Pattern Composite
    consultas = [];

    //Pattern Builder
    constructor(data) {
        this.id = data.profissional_id;
        this.nome = data.nome;
        this.especialidade = data.especialidade;
        if (data.consultas != undefined)
            data.consultas.forEach(e => {
                this.consultas.push(e);
            });
    }

    static readAll() {
        return "SELECT * FROM profissionais";
    }

}

module.exports = Profissional;