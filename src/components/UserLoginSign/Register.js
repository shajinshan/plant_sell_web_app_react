import React, { useState } from 'react'

import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate =useNavigate();

    const [userdata,setUserdata]=useState({gmail:'',phone:'',password:''});

function valChange(e){
    setUserdata({...userdata,[e.target.name]:e.target.value});
   
}

function onRegister(e){
    e.preventDefault();
    axios.post('http://localhost:8082/user/register',userdata)
    .then((res)=>{
        if (res.status === 200) {
        Swal.fire('Successfully Registered');
        navigate('/userlogin');
        }
    })
    .catch((err)=>{
alert(err)
    })


}
  return (
    <div className='registerpage'>
        <div className='reg-container'>
            <h2>Register</h2>
            <form onSubmit={onRegister}> 
            <input placeholder='E-mail' type='email' name='gmail' required onChange={valChange}></input>
            <input placeholder='phone' type='number' required name='phone'onChange={valChange} ></input>
            <input placeholder='password' name='password' required onChange={valChange}></input>
            <button type='submit' className='btn btn-info reg-bttn'>Register</button>
            </form>
            <div>
                <p>Already have an Account ?    <Link to={'/userlogin'}><a className='btn btn-primary'>  Login</a> </Link> </p>
            </div>

        </div>
    </div>
  )
}

export default Register