import express from 'express';
import cors from "cors";

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cors middleware
app.use(cors());

app.get('/',(_req, res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})