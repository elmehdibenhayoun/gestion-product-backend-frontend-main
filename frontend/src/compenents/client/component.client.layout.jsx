import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../../style/css/bootstrap.min.css";
import "./home.css";

export function ClientLayout() {
  const navigate = useNavigate();

  const isAdminLoggedIn = () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.role === "admin";
      }
      return false;
    } catch (error) {
      console.error("Erreur lors du décodage du token :", error);
      return false;
    }
  };

  const getLoggedInUserName = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.role; // Assurez-vous que le nom d'utilisateur est inclus dans le token
    }
    return null;
  };

  const isUserLoggedIn = () => {
    return !!localStorage.getItem("jwtToken");
  };

  const logout = async () => {
    localStorage.removeItem("jwtToken");
    console.log("logout....");
    navigate("/admin/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0  ">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-lg-5" to="/">
            <h1 className="m-0 text-uppercase text-dark">
              <i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ms-auto py-1 ms-lg-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  HomeTest
                </NavLink>
              </li>
              {isAdminLoggedIn() && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/products">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/categories">
                      Catégories
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/contact">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {isUserLoggedIn() ? getLoggedInUserName() : "Profile"}
                </a>
                <div className="dropdown-menu m-0">
                  {isUserLoggedIn() ? (
                    <a className="dropdown-item">
                      <NavLink onClick={logout} >
                        Logout
                      </NavLink>
                    </a>
                      
                   
                    
                  ) : (
                    <a className="dropdown-item" >
                      <NavLink to="/admin/login">
                      Connexion
                    </NavLink>
                    </a>
                    
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
