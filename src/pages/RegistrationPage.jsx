import React from 'react'
import "./RegistrationPage.css"
export default function RegistrationPage(){
    return(
        <>
        
      <div className="registration-container">
      <div className="image-container">
        <img src="../src/assets/regPageImage.png" alt="" />  
        </div>
       <div className="registration-form">
          <h1>Register</h1>
        
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter your Name' />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" placeholder='Enter your phone number'/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter your Email' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' />
          </div>
          <button type="submit">Sign Up</button>
          <div className="belowButton">
            <h3>Already Registered!</h3> <a href="#">Login</a>
        </div>
        </div>
    </div>
</>
  );
}



