import "./LoginButton.css";

const LoginButton = (props) => {
  return (
    <button className="spotify-button" onClick={props.onSpotifyAuthenticate}>
      Connect with Spotify
    </button>
  );
};

export default LoginButton;
