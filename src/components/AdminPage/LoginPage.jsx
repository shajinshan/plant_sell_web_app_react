import React, { useState } from 'react';
import './loginPage.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

function LoginPage() {

    const [userdata,setUserdata]=useState({adminName:'',password:''});


    const navigate=useNavigate();

    function onreadVal(e){
setUserdata({...userdata,[e.target.name]:e.target.value});

    }

    function validLogin(e){
        e.preventDefault(); 
        axios.post('http://localhost:8082/admin/login',userdata)
        .then((res)=>{
alert("Successfully Login")
navigate('/adminmenu')
        })
        .catch((err)=>{
          alert("Invalid usename or password")
        })
    }
  return (
    <div className="vh-100 gradient-custom d-flex justify-content-center align-items-center">
      <div className="login-box shadow-lg">
        <h2 className="text-center text-white">Admin Login</h2>
        <form onSubmit={validLogin}>
          <input className='form-control mb-4' type='text' placeholder='Username' name='adminName' onChange={onreadVal} />
          <input className='form-control mb-4' type='text' placeholder='Password' name='password' onChange={onreadVal}/>
          <button className='btn btn-outline-info log-btn w-100' >Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
