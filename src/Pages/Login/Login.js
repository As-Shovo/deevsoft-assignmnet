import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate();

    const { handleGoogleSignIn,createEmailPasswordUser, loginEmailPasswordUser } = useFirebase();

    const handleRegister = () =>{
        createEmailPasswordUser(email, password);
    };

    const handlellogin = () => {
        loginEmailPasswordUser(email, password, navigate)
    }

    return (
        <div className="login-page">
            <div>
                <h1>Firebase authentication</h1>
                <div className="input">
                    <label htmlFor="E-mail">Your Email :</label> <br />
                    <input type="text" name="Email" placeholder="example@example.com" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <label htmlFor="E-mail">Your Password :</label> <br />
                    <input type="password" name="Email" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                </div>

                <div className="input">
                    <div className="login-button" onClick={handlellogin}>Login</div>
                </div>

                <div className="input">
                    <div className="google-button" onClick={()=>handleGoogleSignIn(navigate)}> Google </div>
                </div>

                <div className="input">
                    <div className="login-button" onClick={handleRegister}>Register</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
