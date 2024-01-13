import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./LoginCard.css";
import { userLogin } from "../../../services/login.services";
import { useAuth  } from "../../../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const LoginCard = () => {

  const { user, login } = useAuth();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  


  async function handlForm2(event) {
    try {
      event.preventDefault();
      const rep = await userLogin({ email: email, password: password });
      const token = rep.data;
      
      // Check if the login request was successful
      if (token) {
        const userDetails = jwtDecode(token); // Assurez-vous que decodeToken est défini correctement
  
        // Stockez le token dans le stockage local
        localStorage.setItem("jwtToken", token);
  
        // Appelez la fonction login avec les détails de l'utilisateur
        login(userDetails);
        
        console.log(userDetails);
        
        // Naviguez vers la page d'accueil
        navigate("/");
        window.location.reload();
      } else {
        // Handle the case where the login request did not return a valid token
        console.error("Login failed. Invalid token received.");
        // You can also display an error message to the user if needed
      }
    } catch (error) {
      // Handle other errors, such as network issues or server errors
      console.error("Error during login:", error.message);
      // You can also display an error message to the user if needed
    }
  }
  
  


  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Login</h1>
        </div>
        <div className="login__inputs">
          <div className="email__input__container input__container">
            <label className="email__label input__label">Email</label>
            <input
              type="email"
              className="email__input login__input"
              placeholder="example@gmail.com"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="password__input__container input__container">
            <label className="password__label input__label">Password</label>
            <input
              type="password"
              className="password__input login__input"
              placeholder="**********"
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className="login__button__container">
            <button className="login__button" onClick={(e) => handlForm2(e)}>LOGIN</button>
          </div>
        </div>
        <div className="login__other__actions">
          <div className="login__forgot__password">Forgot password?</div>
          <div className="login__new__account">
            Don't have account? <Link to="/admin/register">Create account</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
