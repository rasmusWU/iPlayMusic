import "./NavBar.css";
import { Link } from "@reach/router";

function NavBar() {
	return (
		<nav className="NavBar">
			<Link to="/albums">
				<i class="fas fa-wave-square"></i>
			</Link>
			<Link to="/featured">
				<i class="fas fa-microphone"></i>
			</Link>
			<Link to="/">
				<i class="fas fa-compact-disc"></i>
			</Link>
			<Link to="/playlists">
				<i class="fas fa-circle-notch"></i>
			</Link>
			<Link to="/settings">
				<i class="fas fa-cog"></i>
			</Link>
		</nav>
	);
}

export default NavBar;
