import "./Login.css";
import LoginButton from "../UI/LoginButton";
import API from "../../Api/Api";
import { useState } from "react";

const Login = () => {
  const apiInstance = new API();
  async function spotifyAuthenticateHandler() {
    try {
      const response = await apiInstance.getSpotifyURL();
      const url = response.result;
      console.log(url);
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <header className="login-header">
        <h1>Zeta</h1>
        <div>
          <a>Last Stop For Music</a>
        </div>
      </header>
      <LoginButton
        className="login-button"
        onSpotifyAuthenticate={spotifyAuthenticateHandler}
      />
    </div>
  );
};

export default Login;
