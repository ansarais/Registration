import React, { useState } from 'react'

export default function UserFrm() {
    const [formData , getFormData]=useState({
        'name' : '', 
        'email' : '',
        'age' : ''
      });
    
      const [submittedData, getSubmittedData]=useState(null)
    
      const handleChange= (e) =>{
        const {name , value} = e.target;
        getFormData({
          ...formData,[name]:value
        } 
        );
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        getSubmittedData(formData);
      }
    
    
        
      
      return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange} />
                    <br/>
                    <label>Mail ID</label>
                    <input type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange} />
                    <br/>
                    <label>Age :</label>
                    <input type="number" 
                    name="age" 
                    value={formData.age}
                    onChange={handleChange}
                    />
                    <br/>
                    <button type='submit'>Submit</button>
            </form> 
            <div>
              {
                submittedData && (
                    <div>
                     <p>Student Name : {submittedData.name}</p> 
                      <p>Student Mail ID :{submittedData.email} </p>
                      <p>Student Age : {submittedData.age}</p>
                    </div>  
                )        
              }
                
            </div>
        </div>
      )
    }