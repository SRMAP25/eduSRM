import React, { useState } from 'react';
import '../styles/admin_login_page.css';
import AdminHeader from './admin_header';
// import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [values, setValues] = useState({
    Username: "",
    Password: ""
  });

  const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

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

    // try {
    //   console.log(values);
    //   const response = await axios.get('http://localhost:8082/fooddelivery/admin-login', { params: { Username: values.Username } });
    //   console.log(response.data);
    //   if (!response.data.exists) {
    //     validationErrors.UserName = 'Username is incorrect';
    //     setErrors(validationErrors);
    //   } else {
    //     const user = response.data.User;
    //     if (user.Password !== values.Password) {
    //       validationErrors.Password = 'Incorrect Password';
    //       setErrors(validationErrors);
    //     }
    //   }
    // } catch (err) {
    //   console.error("Error checking username:", err);
    // }

    setErrors(validationErrors);
    // if (Object.keys(validationErrors).length === 0) {
    //   navigate('/AdminPage');
    // }
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
            Login
          </button>
          {/* <Link to="/" className="submitButtonGrey">
            User Login
          </Link> */}
        </div>
      </form>
    </div>
  );
  
function SigninValidation(values) {
    const errors = {};
  
    if (!values.Username.trim()) {
        errors.UserName = 'Username is required';
    }
  
  
    // Validate Password
    if (!values.Password.trim()) {
        errors.Password = 'Password is required';
    } else if (values.Password.trim().length < 6) {
        errors.Password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  }
}

export default LoginPage;
