import { Sequelize } from "sequelize-typescript";
import env from 'dotenv';
import Item from "./ItemModel";
import Category from "./CategoryModel";
env.config();

//configuration
const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
    dialect: 'postgres',
    models: [Item, Category],
});

sequelize.addModels([Item]);
sequelize.addModels([Category]);

//test connection
const connect =async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Database connected")
    }catch (err){
        console.log("Error connecting to database", err)
    }
}

connect();

export default sequelize;