import React from 'react'
import { useState } from 'react';
import './Style.css';

export default function UserInputForm() {
  const [formData, setFormData] = useState({username: '',email:''});
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData, [name]: value});

  };

  const handleSubmit = (e) => {
    e.prevent();
  };
  return (
  <form onSubmit={handleSubmit}>
    <label>
      Username:<input type='username' value={formData.username} placeholder='enter your username' onChange={handleInputChange}/>

    </label>
    <br />
    <label>
      email: <input type="email" value={formData.email}placeholder='enter your email' onChange={handleInputChange} />

    </label>
    <br />
    <button type='submit'>Submit</button>
  </form>
  )
}
