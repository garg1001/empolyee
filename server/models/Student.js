import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        requried:true,
    },
    age:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
});

const StudentModel=mongoose.model('student',StudentSchema);
export default StudentModel;
