import "./PlaylistEntry.css";

function PlaylistEntry({ song, artist, min, sec }) {
	return (
		<article className="PlaylistEntry">
			<div className="PlaylistEntry__PlayBtn">
				<svg height="50" width="50">
					<polygon points="24,38 24,18 39,28" />
				</svg>
			</div>
			<div className="PlaylistEntry__TitleSection">
				<h4>{song}</h4>
				<p>{artist}</p>
			</div>
			<p className="PlaylistEntry__TimeCode">
				{min} : {sec}
			</p>
		</article>
	);
}

export default PlaylistEntry;
