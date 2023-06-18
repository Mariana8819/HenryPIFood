const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('LengthTime', {
    //defino el modelo
       number:{
      type: DataTypes.INTEGER,
      allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
}