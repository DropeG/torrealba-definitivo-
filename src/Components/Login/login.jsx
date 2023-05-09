import React from "react";
import './login.css'
import {Link} from 'react-router-dom'

function Login(){
    
    return(
    <div>
        <div className="back-field">
            <div className="back-text">
                <i class="fa-solid fa-arrow-left"></i>
                <Link to= '/'><h1 className="back">Back</h1></Link>
            </div>
        </div>
        
        <div className='container_name'>
            <h1 className='login_name'>Login</h1>
        </div>
        <div class="login-form">
        <form>
            <div class="content">
                <div class="input-field">
                    <input type="email" placeholder="Email" autocomplete="nope"/>
                </div>
                <div class="input-field">
                    <input type="password" placeholder="Password" autocomplete="new-password"/>
                </div>
                <a href="#" class="link">Forgot Your Password?</a>
                <div className="button-field">
                    <button>Login</button>
                </div>
            </div>
        </form>
        </div>
  
         
        
        
        
    </div>
    
    )
};

export default Login;