import React from 'react';
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

    
 const handleChange = (e: { target: { name: any; value: any; }; }) => {
        //console.log("handle change");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        //console.log({ ...formData, [name]: value });
    };

  async function handleLogin(e: any){
    e.preventDefault();
  //console.log("submit");
  // Handle form submission, you can send formData to an API or process it as needed
  //console.log(formData);
  const response  = await fetch('http://localhost:3000/login-user', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ 
          email:      formData.email, 
          password:   formData.password
        })
    })
    if(response.status == 200){
        alert("account created")
    }
    else{
        alert("username already exists!")
    }
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Log-in - Logo365.AI</title>
        <meta name="description" content="Register for Logo365.AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Login.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <div className="container">
            <Navbar />
            <div className="content">
              <form>
                <h2>Welcome back!</h2>
                <h3>Log-in to your account</h3>
                <div className="input-container">
                  <input type="text" placeholder="Enter your Email" className="username-input" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-container">
                  <input type="password" placeholder="Enter your password" className="password-input" id="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <br />
                <p>Don't have an account? <span><a href="http://localhost:3000/register" className="login-link">Signup here </a></span></p>
                <button className="login-button" onClick={handleLogin}>Login</button>
              </form>
            </div>
            <Footer />
        </div>
      </body>
    </html>
  );
};

export default Login;