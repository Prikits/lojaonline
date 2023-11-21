module.exports = (sequelize, Datatypes) => {
    const Compra = sequelize.define('compra', {
        qntProdutos: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        valorTotal: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
    });
    return Compra;
};
