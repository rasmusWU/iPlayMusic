import "../Global.css";
import "./Featured.css";
import FeaturedSection from "../components/FeaturedSection";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/me", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data));
		},
		[token, setContent]
	);

	console.log(content);

	return (
		<div className="wrapper">
			<div className="Featured">
				<TopBar pagetitle="FEATURED" />
				<NavBar />
				<h1>Featured</h1>
				<p>{content.country}</p>
				<section className="FeaturedAlbums">
					<FeaturedSection title="The Greatest Showman" category="Soundtrack" />
					<FeaturedSection />
				</section>
			</div>
		</div>
	);
}

export default Featured;
