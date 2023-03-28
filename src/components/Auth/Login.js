import "./Login.css";
import LoginButton from "../UI/LoginButton";

const Login = () => {
  return (
    <div className="login">
      <header className="login-header">
        <h1>Zeta</h1>
        <div>
          <a>Last Stop For Music</a>
        </div>
      </header>
      <LoginButton className="login-button" />
    </div>
  );
};

export default Login;
