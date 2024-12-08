import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Form } from 'react-router-dom';
function Employee() {
  const [employees,setemployees]=useState();
  const [form,setForm]=useState({name:"",address:"",salary:0});

  function getAllEmployees() {
    try {
   axios.get("http://127.0.0.1:8804/employee").then((d)=>{
   setemployees(d.data.empData);
   })
    } catch(error) {
      alert("something went wrong while using API!!!");
    }
     }
     useEffect(()=>{
      getAllEmployees();
     },[]);
     const changeHandler=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});
     }
     function renderEmployees()
     {
      return employees?.map((item)=>{
        return(
          <tr>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.salary}</td>
            <td>
              <button className='btn btn-info m-2'data-target="#editModal" data-toggle="modal"
              onClick={()=>{
                setForm(item);
              }}
              >Edit</button>
              <button className='btn btn-danger'
              onClick={()=>{deleteClick(item._id)}}>
                Delete</button>
            </td>
          </tr>

        );

      });
     }
     function saveClick()
     {
      try{
      axios.post("http://127.0.0.1:8804/employee",form).then((d)=>{
        alert(d.data.message)
        getAllEmployees();
        resetForm();
      })
      } catch(error){
     alert("something went wrong while using API!!")
      }
     }
     function resetForm()
     {
      setForm({name:"",address:"", salary:0});
     }
     function updateClick()
    {
      try{
     axios.put("http://127.0.0.1:8804/employee",form).then((d)=>{
      alert(d.data.message);
      getAllEmployees();
      resetForm();
     });
      } catch{
        alert("somthing went wrong while using API!!!");
      }

    }
    function deleteClick(id)
    {
    let ans=window.confirm("want to delete data ?");
    if (!ans) return;
    try{
    axios.delete("http://127.0.0.1:8804/employee",{data: {id: id } }).then((d)=> {
      alert(d.data.message);
      getAllEmployees();
    });
    }catch{
    alert("something went wrong while using API!!!");
    }
    }
    

     
     
  return (
    <>
      <div class="row border p-2 m-2">
        <div className="col-9 text-left">
          <h2 className="text-primary">Employee List</h2>
        </div>
        <div className='col-3'>
          <button
          className='btn btn-info form-control'
          data-target="#newModal"
          data-toggle="modal"
          >
            Add New Employee
          </button>
        </div>
      </div>
      <div className='border  p-2 m-2'>
        <table className='table table-borded table-striped table-active'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderEmployees()}</tbody>
        </table>
      </div>
      {/* New Employee */}
      <div class="modal" tabindex="-1" role="dialog" id="newModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title text-white">New Employee</h5>
        <button type="button"
         class="close"
          data-dismiss="modal"
           aria-label="Close"
            >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className='form-group row'>
          <label className='col-4'>Name</label>
          <div className='col-8'>
            <input type="text" name="name" 
            className='form-control'
             placeholder='Enter Name'
            onChange={changeHandler} value={form.name}/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Address</label>
          <div className='col-8'>
            <input type="text" name="address"
             className='form-control'
              placeholder='Enter Address'
               onChange={changeHandler}value={form.address}/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Salary</label>
          <div className='col-8'>
            <input type="number" name="salary"
             className='form-control'
              placeholder='Enter Salary'
              onChange={changeHandler} value={form.salary}/>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal"onClick={saveClick}>Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      {/* Edit Employee */}
      <div class="modal" tabindex="-1" role="dialog" id="editModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title text-white">Edit Employee</h5>
        <button type="button"
         class="close"
          data-dismiss="modal"
           aria-label="Close"
            >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className='form-group row'>
          <label className='col-4'>Name</label>
          <div className='col-8'>
            <input type="text" name="name" 
            className='form-control'
             placeholder='Enter Name'
            onChange={changeHandler} value={form.name}/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Address</label>
          <div className='col-8'>
            <input type="text" name="address"
             className='form-control'
              placeholder='Enter Address'
               onChange={changeHandler}value={form.address}/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Salary</label>
          <div className='col-8'>
            <input type="number" name="salary"
             className='form-control'
              placeholder='Enter Salary'
              onChange={changeHandler} value={form.salary}/>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={updateClick}>Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Employee
