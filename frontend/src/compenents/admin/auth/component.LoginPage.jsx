import LoginCard from "../../card/LoginCard/LoginCard.js";
import "./login.css";

export function LoginPage() {
 
  return (
    <div className="login__auth__container">
      <div className="login__auth">
        <LoginCard />
      </div>
    </div>
  );
}
