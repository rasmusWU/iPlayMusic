import querystring from "querystring";
import "./Login.css";

function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "08ce924a8b164d4a9304e057d417a12f",
		scope: "user-read-private user-read-email",
		redirect_uri: "http://localhost:8888/callback",
		state: "34987thg87tgher8tgh43t87gtfrew8gfer7ifwer7ifugre376fg34867trf43g78rfre8f4we68gfrd4w367irg",
	});

	return (
		<main className="Login">
			<h1>Login</h1>
			<div className="LoginArea">
				<div></div>
				<input type="text" name="" id="" placeholder="Enter you username" />
				<input type="password" name="" id="" placeholder="Enter you password" />
				<button>LOG IN</button>
				<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
			</div>
		</main>
	);
}

export default Login;
