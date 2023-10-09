const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Schebet, Like }) {
      User.hasMany(Schebet, {
        foreignKey: 'userId',
      });
      User.hasMany(Like, {
        foreignKey: 'userId', onDelete: 'cascade',
      });
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
