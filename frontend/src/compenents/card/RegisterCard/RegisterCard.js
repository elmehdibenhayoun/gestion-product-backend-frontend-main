import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './RegisterCard.css';
import { addUser} from '../../../services/login.services';

import { useNavigate } from "react-router-dom";

const RegisterCard = () => {

  const [lName,setLname]=useState("");
  const [fName,setFname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();


  async function handlForm(event) {
    try {
      event.preventDefault();
      
      const user = { "lName": lName, "fName": fName, "email": email, "password": password };
  
      // Assuming addUser returns some response, modify accordingly if needed
      const response = await addUser(user);
  
      // Check if the registration request was successful (modify condition if needed)
      if (response) {
        navigate("/");
      } else {
        // Handle the case where the registration request did not succeed
        console.error("Registration failed. Invalid response received.");
        // You can also display an error message to the user if needed
      }
    } catch (error) {
      // Handle other errors, such as network issues or server errors
      console.error("Error during registration:", error.message);
      // You can also display an error message to the user if needed
    }
  }
  
    return ( 
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" onChange={e=>setLname(e.target.value)}/>
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input type="text" className="lname__input register__input" onChange={e=>setFname(e.target.value)}/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input register__input" placeholder='example@gmail.com' onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="text" className="password__input register__input" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" onClick={(e) => handlForm(e)}>Create Account</button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <Link to="/admin/login">Login</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterCard;