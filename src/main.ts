import express from 'express';
import cors from "cors";
import sequelize from './Models';

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

app.get('/',(_req, res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})