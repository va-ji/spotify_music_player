import "./Login.css";
import LoginButton from "../UI/LoginButton";
import API from "../../Api/Api";
import { useState, useEffect } from "react";

const Login = () => {
  const apiInstance = new API();
  const [authCode, setAuthCode] = useState(null);

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

  useEffect(() => {
    // Check if the user has granted authorization to your app
    console.log("use effect entered when mounted");
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setAuthCode(code);
    }
  }, []);

  useEffect(() => {
    async function getSpotifyAccessToken() {
      if (authCode) {
        // User has granted authorization and an authorization code is present
        console.log("Authorization code:", authCode);
        try {
          const response = await apiInstance.getAuthToken(authCode);
          console.log(response);
          const accessToken = response.result.access_token;
          const refreshToken = response.result.refresh_token;
          localStorage.setItem("access_token", accessToken);
          localStorage.setItem("refresh_token", refreshToken);
        } catch (e) {
          console.log(`error authcode: ${e}`);
        }
      }
    }
    getSpotifyAccessToken();
  }, [authCode]);

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
