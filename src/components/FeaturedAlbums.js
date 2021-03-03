import "./FeaturedAlbums.css";
import TitleSection from "./TitleSection";

function FeaturedAlbums() {
	return (
		<section className="FeaturedAlbums">
			<TitleSection title="Featured Albums" />
			<section className="AlbumSelection">
				<img src="https://via.placeholder.com/300C/" alt="album" />
				<img src="https://via.placeholder.com/300C/" alt="album" />
				<img src="https://via.placeholder.com/300C/" alt="album" />
				<img src="https://via.placeholder.com/300C/" alt="album" />
			</section>
		</section>
	);
}

export default FeaturedAlbums;
