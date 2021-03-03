import "../Global.css";
import "./Albums.css";
import FeaturedAlbums from "../components/FeaturedAlbums";
import NewReleases from "../components/NewReleases";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

function Albums({ category }) {
	return (
		<div className="wrapper">
			<div className="Albums">
				<TopBar pagetitle="MUSIC" />
				<NavBar />
				<h1>All Albums</h1>
				<FeaturedAlbums />
				<NewReleases />
			</div>
		</div>
	);
}

export default Albums;
