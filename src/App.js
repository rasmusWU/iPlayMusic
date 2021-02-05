import './Global.css';
import './App.css';
import { Router } from '@reach/router';
import Albums from './pages/Albums';
import Featured from './pages/Featured';
import Playlists from './pages/Playlists';
import Login from './pages/Login';
import Callback from './pages/Callback';
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
  var tokenState = useState(null);

  return (
    <div className="wrapper">
      <TokenContext.Provider value={tokenState}>
        <Router>
          <Login default />
          <Albums path="/albums" />
          <Featured path="/featured" />
          <Playlists path="/playlists" />
          <Callback path="/callback" />
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;