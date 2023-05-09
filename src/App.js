import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './Components/Navbar/navbar.jsx'
import HomePage from './Components/HomePage/homepage.jsx'
import Login from './Components/Login/login.jsx'
import Sign from './Components/Sign/sign.jsx'
import Body from './Components/Body/body.jsx'


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Sign" element={<Sign/>}/>
                <Route path='/Home' element={<>
                    <Navbar/>
                    <Body/>
                </>}/>
                
 
            
            </Routes>
        </Router>
    )}
export default App