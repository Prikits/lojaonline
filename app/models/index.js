const config = require('../../config.js');
const dbconfig = config.dbconfig;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.host, {
  port: dbconfig.port,
  dialect: dbconfig.dialect,
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle,
    },
    define: {
      underscored: dbconfig.define.underscored,
      freezeTableName: dbconfig.define.freezeTable,
      timestamps: dbconfig.define,
      paranoid: dbconfig.define.paranoid,
    },
    dialectOptions: {
      dateStrings: false,
      typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    timezone: '-03:00',
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require('./Usuario.js')(sequelize, Sequelize);
db.compra = require('./Compra.js')(sequelize, Sequelize);
db.cliente = require('./Cliente.js')(sequelize, Sequelize);

require('./relations.js')(sequelize.models);

module.exports = db;
