import React from 'react'
import {Link} from 'react-router-dom'
import './homepage.css'


function HomePage(){
    return (
        <div className='container_all'>
        
                <div className='name_container'>
                    <h1 className='name_login'>TOKO-IR</h1>
                    <a href="" className='slogan'>¡Viaja seguro!</a>
                </div>
                <div className='login_sign_container'>
                    <div className='div_buttons'>
                        <Link to= "/Login"><button className='buttons log'>Login</button></Link>
                        <Link to='/Sign'><button className='buttons sign'>Sign In</button></Link>
                    </div>
                </div>
           
        </div>
    )
}

export default HomePage