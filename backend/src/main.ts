import express from 'express';
import cors from "cors";
import sequelize from './Models/index';
import itemRoutes from './v1/Routes/itemRoutes';
import categoryRoutes from './v1/Routes/categoryRoutes';
import swaggerDocs from './v1/swagger';

const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cors options
const corsOptions={
    origin: process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : [],
    optionsSuccessStatus:200
}
//cors middleware
app.use(cors(corsOptions));

//sync database
sequelize.sync({force:false})
.then(()=>{
})
.catch((err)=>{
    console.log(err)
})


//routes
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/categories", categoryRoutes);

app.listen(PORT,()=>{
    swaggerDocs(app, PORT);
    console.log(`Server is running on port ${PORT}`);
})

export default app;