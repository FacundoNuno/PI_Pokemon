const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });
};
