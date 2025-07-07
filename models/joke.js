import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Joke =  sequelize.define("Joke", {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
question: {
    type: DataTypes.STRING,
    allowNull: false
},
response: {
    type: DataTypes.STRING,
    allowNull: false
}
});

export default Joke;