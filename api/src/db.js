require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const DietsModel = require ('./models/Diets');
const DishTypesModel = require ('./models/DishTypes');
const IngredientsModel= require ('./models/Ingredients');
const Instruction

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diets,DishTypes,Ingredients, Instructions, LengthTime,Steps} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Relacion uno a muchos -> Una receta tiene muchas instrucciones (paso a paso)
//Y la instruccion (paso) pertenece a una receta
Recipe.hasMany( Instructions );
//Una recipe(receta) tiene muchos Instruction(pasos o instrucciones)
Instructions.belongsTo( Recipe );
//una Instruction pertenece a una recipe

//Relacion muchos a muchos -> una receta tiene muchas dietas (keto, vegano....)
//Una dieta puede estar en muchas recetas (la dieta keto puede tener muchas recetas) 
Recipe.belongsToMany( Diets, { through: 'DishTypes' } );
Diets.belongsToMany( Recipe, { through: 'DishTypes' } );



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
