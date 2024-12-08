import EmployeeModel from "../models/Employee.js";

export const CreateEmployee=async(req,res)=>{
    try {
        const empData=await EmployeeModel.create({
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        });
        if(empData) res.status(201).send({message:"Employee Created !!!"});
        else res.status(404).send({message:"unable to create employee!!!"});
        
    } catch (error) {
        console.log("Fail to sumbit data!!!");
        
    }
};

export const UpdateEmployee=async(req,res)=>{
    try {
        const empData=await EmployeeModel.findByIdAndUpdate({_id:req.body._id},{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        });
        if(empData)res.status(200).send({message:"Employee Updated !!!"});
        else res.status(404).send({message:"unable to  employee!!!"});
        
    } catch (error) {
        console.log("Fail to sumbit data!!!");
        
    }
};

export const DeleteEmployee=async(req,res)=>{
    try {
        const empData=await EmployeeModel.deleteOne({_id: req.body.id});
         if(empData) res.status(200).send({message:"Employee deleted !!!"});
        else res.status(404).send({message:"unable to  employee!!!"});
        
    } catch (error) {
        console.log("Fail to sumbit data!!!");
        
    }
};

export const GetEmployee=async(req,res)=>{
    try{
        const empData=await EmployeeModel.find();
        res.status(200).send({empData});
        }catch (error){
            console.log("Fail to submit data!!!");
        }
    };


