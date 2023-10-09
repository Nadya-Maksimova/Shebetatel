const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Schebet }) {
      Like.belongsTo(User, ({ foreignKey: 'userId', onDelete: 'cascade' }));
      Like.belongsTo(Schebet, ({ foreignKey: 'schebetId', onDelete: 'cascade' }));
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },

    },
    schebetId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Schebets',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
