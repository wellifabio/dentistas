class Consulta {

    tratamentos = [];

    constructor(data) {
        this.id = data.consulta_id;
        this.paciente = data.paciente;
        this.data = data.data;
        this.horario = data.horario;
        this.profissional = data.profissional;
        if (data.tratamentos != undefined)
            data.tratamentos.forEach(e => {
                this.tratamentos.push(e);
            });
    }

    addTratamento(trat){
        this.tratamentos.push(trat);
    }
    
    static readAll(){
        return "SELECT * FROM consultas";
    }
}

module.exports = Consulta;