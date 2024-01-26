

import React, { useState } from 'react';
import './BasicForm.css'; 
import axios from 'axios'




const BasicForm = () => {

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [department,setDepartment] = useState('')
    const [gender,setGender] = useState('')
   
  const handleSubmit = (e) => {
    console.log(name);
    const userdata = {
        department:department,
        name:name,
        age:age,
        gender:gender
    };
    
    axios.post("http://localhost:3000/addStaff",userdata).then((response)=>{
        console.log(response.status);
    });
   
   
  };

  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Enter The Details</h2>
        <label htmlFor="department">department</label>
        <input type="text" id="department" name="department" required onChange={(e)=>setDepartment(e.target.value)}></input>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)}></input>
        
        <label htmlFor="age">age:</label>
        <input  id="age" name="age" required onChange={(e) => setAge(e.target.value)}></input>

        <label htmlFor="gender">gender:</label>
        <input  id="gender" name="gender" required onChange={(e) => setGender(e.target.value)}></input>


        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
