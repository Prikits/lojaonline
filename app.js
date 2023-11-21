require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const app = express();
const models = require('./app/models');
app.use(express.json()); //recepcao de dados em JSON
//cors:
app.use(
  cors({
    origin: '*',
  })
);

models.sequelize
  .sync() //{ force: true }
  .then(() => {
    console.log('sincronizando com banco de dados');
  })
  .catch((error) => {
    console.log('erro ao sincronizar com bd', error.message);
  });

//ROTAS
app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Loja Online',
    version: '1.0',
  });
});
const usuarioRotas = require('./app/routes/usuario.routes.js');
const clienteRotas = require('./app/routes/cliente.routes.js');
app.use(usuarioRotas);
app.use(clienteRotas);

app.listen(config.port, () => {
  console.log('servidor on-line');
});
