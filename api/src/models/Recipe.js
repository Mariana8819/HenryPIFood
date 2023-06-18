const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    //defino el modelo
       id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate:{isUrl: true},
      },
      sumary:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      health_score:{
        type: DataTypes.INTEGER,
      },
      instruction:{
        type: DataTypes.STRING,
        allowNull:false,
      }
    })
   }
