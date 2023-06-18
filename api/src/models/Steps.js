const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Steps', {
    //defino el modelo
       number:{
      type: DataTypes.INTEGER,
      allowNull: false,
      },
      step: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
     // ingredients:{ } //TABLA A CONECTAR!!

      
    })
}