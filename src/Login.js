import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			<h1>This is login page</h1>
			<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />

			{/* Login with spotify button */}
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
