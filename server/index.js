import mongoose  from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CreateEmployee, DeleteEmployee, GetEmployee, UpdateEmployee } from "./controllers/Employee.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

//http://localhost:8804/employee


app.post("/employee",CreateEmployee);
app.put("/employee",UpdateEmployee);
app.delete("/employee",DeleteEmployee);
app.get("/employee",GetEmployee);


mongoose
.connect(process.env.DB_URL).then(()=>{
    console.log("database connected");
    app.listen(process.env.PORT,()=>{
        console.log("server running at port :" + process.env.PORT)
    });
})
.catch(()=>{
    console.log("database connection error");
});