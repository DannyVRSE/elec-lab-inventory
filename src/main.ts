import express from 'express';
import cors from "cors";
import sequelize from './Models/index';
import itemRoutes from './v1/Routes/itemRoutes';
import categoryRoutes from './v1/Routes/categoryRoutes';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cors middleware
app.use(cors());

//sync database
sequelize.sync({force:false})
.then(()=>{
    console.log("Database synced...")
})
.catch((err)=>{
    console.log(err)
})


//routes
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/categories", categoryRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

export default app;