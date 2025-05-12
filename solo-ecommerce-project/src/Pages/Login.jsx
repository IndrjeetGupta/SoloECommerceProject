import React, { useState } from "react";
import './../Css/Login.css'

function Login() {
  const initialData = {
    email: "",
    password: "",
  };
    //   email: "eve.holt@reqres.in",
    // password: "cityslicka",

  const [loginForm, setLoginForm] = useState(initialData);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginData();
  };

  const postLoginData = async () => {
    const loginData = {
      email: loginForm.email,
      password: loginForm.password,
    };

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "reqres-free-v1" // Replace with actual API key from Reqres
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Login successful!");
      } else {
        alert("Login failed: " + result.error);
      }
    } catch (err) {
      console.log("Fetch error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="main">
      <form  className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={loginForm.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <br />
        <input className="btn" type="submit" value="Login" 
        style={{backgroundColor : 'green', border : 'none', fontSize : '20px'}}
        />
      </form>
    </div>
  );
}

export default Login;
