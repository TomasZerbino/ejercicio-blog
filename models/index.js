
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        ialect: process.env.DB_CONNECTION,
    }   
)

