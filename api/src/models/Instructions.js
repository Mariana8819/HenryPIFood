const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Instructions', {
    //defino el modelo
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

     // steps: { CONECTAR CON LA TABLA!!
    //},
    
      equipment:{
        type: DataTypes.STRING,
        allowNull: false,
      },

     // lengthTime:{ CONECTAR CON LA TABLA!!!
     //}

    })
}