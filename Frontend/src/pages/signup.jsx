import React from 'react'
import './signup.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {

  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signup-page">

      <form className="signup-form">

        <h1 className="signup-title">
          Register to <span>Vexa</span>
        </h1>

        <input
          className="signup-input"
          type="text"
          placeholder="Enter your name"
        />

        <input
          className="signup-input"
          type="email"
          placeholder="Enter your Email"
        />

        <div className="password-box">
          <input
            className="signup-input password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />

          {!showPassword &&
            <FaEye
              className="password-icon"
              onClick={() => setshowPassword(true)}
            />
          }

          {showPassword &&
            <FaEyeSlash
              className="password-icon"
              onClick={() => setshowPassword(false)}
            />
          }
        </div>

        <button className="signup-button">
          Sign Up
        </button>

        <p className="signin-text" onClick={() => navigate('/signin')}>
          Already have an account? <span>Sign In</span>
        </p>

      </form>

    </div>
  )
}

export default Signup