import mongoose from  "mongoose";

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        reequired:true,
    },
    salary:{
        type:Number,
        required:true,
    },
},
{timestamps:true}
);

const EmployeeModel=mongoose.model("employee",EmployeeSchema);
export default EmployeeModel;
