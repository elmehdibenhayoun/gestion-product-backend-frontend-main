import React, { useState } from "react";
//import '../../login.css'; // Make sure to adjust the path based on your project structure
import { addUser, userLogin } from "../../../services/login.services.js";
import { useNavigate, Link } from "react-router-dom";
import LoginCard from "../../card/LoginCard/LoginCard.js";
import "./login.css";

export function LoginPage() {
  const [tab, setTab] = useState("sign-in");
  const [lName, setLname] = useState("");
  const [fName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  async function handlForm(event) {
    event.preventDefault();
    const user = {
      lName: lName,
      fName: fName,
      email: email,
      password: password,
    };
    await addUser(user);
  }

  async function handlForm2(event) {
    event.preventDefault();
    const rep = await userLogin({ email: email, password: password });
    const token = rep.data;
    await localStorage.setItem("jwtToken", token);
    navigate("/admin/products");
  }

  return (
    <div className="login__auth__container">
      <div className="login__auth">
        <LoginCard />
      </div>
    </div>
  );
}
