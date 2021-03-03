import "./Global.css";
import "./App.css";
import { Router } from "@reach/router";
import Albums from "./pages/Albums";
import Featured from "./pages/Featured";
import Playlists from "./pages/Playlists";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import TokenContext from "./TokenContext";
import { useState } from "react";
// import ErrorBoundary from "ErrorBoundary";

function App() {
	var tokenState = useState(null);

	return (
		<TokenContext.Provider value={tokenState}>
			<div className="wrapper">
				<Router>
					<Login default />
					<Albums path="/albums" />
					<Featured path="/featured" />
					<Playlists path="/playlists" />
					<Callback path="/callback" />
				</Router>
			</div>
		</TokenContext.Provider>
	);
}

export default App;
