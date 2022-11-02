import React, { useState } from "react";
import "./loginform.css"

const Loginform = () =>{
    const [popupStyle, showPopup] = useState("hide")

    const Popup = () => {
        showPopup("login-Popup")
        setTimeout( () => showPopup("hide"), 3000)
    }
  return (
    <div className="cover">
        <h1>login</h1>
        <input type="text" placeholder="username" /><br/>
        <input type="password" placeholder="password" /><br/>

        <div className="login-btn" onClick={Popup} >Login</div>

            <p className="text">Or login using</p>
            
            <div className="alt-login">
              
            </div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>


    </div>
  )  
} 

export default Loginform