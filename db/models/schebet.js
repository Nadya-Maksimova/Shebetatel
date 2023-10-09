const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schebet extends Model {
    static associate({ User, Like }) {
      Schebet.belongsTo(User, {
        foreignKey: 'userId',
      });
      Schebet.hasMany(Like, {
        foreignKey: 'schebetId',
        onDelete: 'cascade',
      });
    }
  }
  Schebet.init({
    image: DataTypes.TEXT,
    text: DataTypes.TEXT,
    userName: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Schebet',
  });
  return Schebet;
};
