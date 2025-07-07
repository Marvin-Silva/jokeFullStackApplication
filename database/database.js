import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/data.db" // fichier SQLite
});

export default sequelize;

 

