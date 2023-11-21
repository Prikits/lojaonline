module.exports = {
    type: 'object',
    properties: {
        nome: { type: 'string', minLength: 3 },
        cpf: { type: 'string', minLength: 11 },
        telefone: { type: 'string', minLength: 11 },
    },
    additionalProperties: false,
  };
  