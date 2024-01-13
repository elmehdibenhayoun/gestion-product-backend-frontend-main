import http from './http-common'; 
import { jwtDecode } from 'jwt-decode';

export async function addUser(u){
       return await http.post("/signUp",u);
}
export async function userLogin(loginData){
       return await http.post("/login",loginData);
}
export function isAdminLoggedIn(){
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

