module.exports = function (models) {
    models.usuario.hasMany(models.compra, {
      foreignKey: 'id_usuario',
      onDelete: 'CASCADE',
    });
    models.compra.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      onDelete: 'CASCADE',
    });
  };
  