import React, { useState } from "react";
import { addUser, userLogin } from "../../../services/login.services.js";
import { useNavigate, Link } from "react-router-dom";
import RegisterCard from "../../card/RegisterCard/RegisterCard.js";
import './register.css'

export const Register = () => {
  
    return (
      <div className="register__auth__container">
        <div className="register__auth">
          <RegisterCard />
        </div>
      </div>
    );
  };