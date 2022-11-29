
require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Tratamento = require("./routes/tratamento.routes");
const Consulta = require("./routes/consulta.routes");
const Profissional = require("./routes/profissional.routes");

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use("/profissionais", Profissional)
    .use("/tratamentos", Tratamento)
    .use("/consultas", Consulta);

app.listen(PORT, () => {
    console.log('API em execução na porta ' + PORT);
});