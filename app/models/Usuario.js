module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        nome: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
    });
    return Usuario;
};
