import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

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

  const isUserLoggedIn = () => {
    return !!localStorage.getItem("jwtToken");
  };

  const logout = async () => {
    await localStorage.removeItem("jwtToken");
    console.log("logout....");
    window.location.reload();
    navigate("/admin/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <NavLink className={"nav-link"} to="/">
                Home
              </NavLink>
            </li>
            {isAdminLoggedIn() && (
              <>
                <li>
                  <NavLink className={"nav-link"} to="/admin/products">
                    Produits
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"nav-link"} to="/admin/categories">
                    Catégories
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink className={"nav-link"} to="/admin/contact">
                Contacts
              </NavLink>
            </li>
            <li>
              {isUserLoggedIn() ? (
                <NavLink onClick={logout} className={"nav-link"}>
                  Se déconnecter
                </NavLink>
              ) : (
                <NavLink className={"nav-link"} to="/admin/login">
                  Connexion
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
