const Profissional = require('./Profissional');
const Consulta = require('./Consulta');
const Tratamento = require('./Tratamento');

//Pattern de Estrutura Composite (Objeto Profissional composto por outros objetos Consultas e Tratamentos)
//Pattern Criação Factory (Função que fabrica um objeto)
const profissional = (lista) => {
    let consultas = [];
    let i = 0;
    let consulta_id = lista[i].consulta_id;
    consultas.push(new Consulta(lista[i]));
    lista.forEach(e=>{ //Percorrer a lista
        if(consulta_id != e.consulta_id){ //Eliminando consultas duplicadas
            consulta_id = e.consulta_id;
            consultas.push(new Consulta(e));
            i++;
            consultas[i].addTratamento(new Tratamento(e));
        }else{
            consultas[i].addTratamento(new Tratamento(e));
        }
    });
    const prof = lista[i];
    prof.consultas = consultas;
    return new Profissional(prof);
}

module.exports = {
    profissional
};