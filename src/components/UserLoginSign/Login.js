import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './css/Registerr.css'

function Login({updateLoginStatus , setUserId ,setUserName}) {
    
    

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState({ gmail: '', password: '' });

    function valChange(e) {
        setUserdata({ ...userdata, [e.target.name]: e.target.value });

    }
    function onLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:8082/user/login', userdata)
            .then((res) => {
                if (res.status === 200) {
                
                const userId = res.data.error[0]; 
                const userGmail=res.data.error[1];
                
                //store localy
                localStorage.setItem('userId',userId);
                localStorage.setItem('userGmail',userGmail);


                setUserId(userId);
                setUserName(userGmail);
                    updateLoginStatus(true); 
                    Swal.fire('Successfully Login');
                    navigate('/');
                }

            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    Swal.fire({
                        titleText: 'Incorrect Username or Password',
                        showConfirmButton: true
                    });
                }
            })

    }
    return (
        <div className='registerpage'>
            <div className='reg-container'>
                <h2>Login</h2>
                <form onSubmit={onLogin}>
                    <input placeholder='E-mail' type='email' name='gmail' required onChange={valChange}></input>
                    <input placeholder='password' name='password' required onChange={valChange}></input>
                    <button type='submit' className='btn btn-primary reg-bttn'>Login</button>
                </form>
                <div>
                    <p>New user ? <Link to={'/register'}><a className='btn btn-info'>Register</a></Link> </p>
                </div>

            </div>
        </div>
    )
}

export default Login