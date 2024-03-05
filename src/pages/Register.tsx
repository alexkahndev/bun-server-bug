import React from 'react';
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    password: '',
    confpass: '',
    });
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        //console.log("handle change");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function handleSubmit(e:any) {
      e.preventDefault();

      const response = await fetch('http://localhost:3000/create-user', {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            firstName:  formData.firstname, 
            lastName:   formData.lastname, 
            email:      formData.email, 
            phone:      formData.phone, 
            password:   formData.password
          })
      })
      if (!response.ok){
        const data = await response.json();
        alert("Could not create the user because: " + data.message)
      }
  };



  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Register - Logo365.AI</title>
        <meta name="description" content="Register for Logo365.AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Register.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
      <Navbar />
        <div className="container">
          <div className="content">
            <h2>Welcome !</h2>
            <h1 className="title">
              <span>Registering for</span><br />
              <span className="title2">Logo365.AI is easy.</span>
            </h1>
            <br />
            <form>
            <h3>First Name</h3>
            <div className="input-container">
              <input type="text" placeholder="Enter your First Name." className="username-input" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>
            <h3>Last Name</h3>
            <div className="input-container">
              <input type="text" placeholder="Enter your First Name." className="username-input" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>
            </div>
            <h3>Email</h3>
            <div className="input-container">
              <input type="email" placeholder="Enter your email." className="email-input" id="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <h3>Phone Number</h3>
            <div className="input-container">
              <input type="text" placeholder="xxx-xxx-xxxx" className="username-input" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
            </div>
            <h3>Password</h3>
              <div className="input-container">
              <input type="password" placeholder="Enter your password." className="password-input" id="password" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <h3>Confirm Password</h3>
              <div className="input-container">
              <input type="password" placeholder="Confirm your password." className="confirm-password-input" id="confpass" name="confpass" value={formData.confpass} onChange={handleChange}/>
            </div>
            <br />
            <button  onClick={handleSubmit} className="register-button">Register</button>
            <div className="login-text">
              <p>Already have an account? <span><a href="http://localhost:3000/login" className="login-link">Log-In here </a></span></p>
            </div>
            {/* Add your registration form or content here */}
            </form>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Register;