import "./PlaylistEntries.css";
import PlaylistEntry from "./PlaylistEntry";

function PlaylistEntries() {
	return (
		<section className="PlaylistEntries">
			<PlaylistEntry song="Old Town Road" artist="Billy Ray Cyrus" min="3" sec="58" />
			<PlaylistEntry song="Don't Call Me Up" artist="Mabel" min="2" sec="46" />
			<PlaylistEntry song="Let Me Down Slowly" artist="Alec Benjamin" min="4" sec="12" />
			<PlaylistEntry song="Here With Me" artist="Marshmello" min="3" sec="37" />
			<PlaylistEntry song="Paradise" artist="Bazzi" min="3" sec="12" />
			<PlaylistEntry song="Let Me Down Slowly" artist="Alec Benjamin" min="4" sec="12" />
			<PlaylistEntry song="Here With Me" artist="Marshmello" min="3" sec="37" />
			<PlaylistEntry song="Paradise" artist="Bazzi" min="3" sec="12" />
		</section>
	);
}

export default PlaylistEntries;
