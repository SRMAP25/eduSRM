import React, { useState } from 'react';
import "./styles/admin_login_page.css"
import { Link } from 'react-router-dom';




const Login = () => {
  const [values, setValues] = useState({
    Username: "",
    Password: ""
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setValues(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleSignin = async (event) => {
    event.preventDefault();
    const validationErrors = SigninValidation(values);
    setErrors(validationErrors);
  }

  return (
    <div className="admin-login-container">
      
      <form onSubmit={handleSignin} className="admin-login-form">
        <h1>Admin Login</h1>
        <div className="input">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            placeholder="Enter your username"
            value={values.Username}
            onChange={handleInput}
          />
          {errors.UserName ? <p className='error'>{errors.UserName}</p> : ""}
        </div>
        <div className="input">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Password"
            value={values.Password}
            onChange={handleInput}
          />
          {errors.Password ? <p className='error'>{errors.Password}</p> : ""}
        </div>
        <div className="submit">
          <button
            type="submit"
            className="submitButton"
          >
            <Link to="/admin" >log admin</Link>
          </button>
        
        </div>
        
      </form>
      <div>
          
        </div>

    </div>
  );
  
function SigninValidation(values) {
    let errors = {};
  
    if (!values.Username.trim()) {
        errors.UserName = 'Username is required';
    }

    if (!values.Password.trim()) {
        errors.Password = 'Password is required';
    } else if (values.Password.trim().length < 6) {
        errors.Password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  }
}

export default Login;
