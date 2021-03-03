import "./NewReleases.css";
import TitleSection from "./TitleSection";
import AlbumRelease from "./AlbumRelease";

function NewReleases() {
	return (
		<section className="NewReleases">
			<TitleSection title="New Releases" />
			<section className="Releases">
				<AlbumRelease
					img="https://via.placeholder.com/100"
					title="Old Town Road"
					author="Billy Ray Cyrus"
					tracks="12"
				/>
				<AlbumRelease img="https://via.placeholder.com/100" title="Victory Lab" author="Nipsey Hussie" tracks="8" />
				<AlbumRelease img="https://via.placeholder.com/100" title="Thank U, Next" author="Ariana Grande" tracks="13" />
				<AlbumRelease
					img="https://via.placeholder.com/100"
					title="Death Race For Love"
					author="Juice WRLD"
					tracks="11"
				/>
			</section>
		</section>
	);
}

export default NewReleases;
