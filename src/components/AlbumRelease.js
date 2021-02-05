import './AlbumRelease.css';

function AlbumRelease({img, title, author, tracks}) {
    return (
        <section className="AlbumRelease">
            <img src="https://via.placeholder.com/100" alt=""/>
            <section className="AlbumInfo">
                <h5>{title}</h5>
                <p>{author}</p>
            </section>
            <section classname="AlbumTracks">
            <p>{tracks} Songs</p>
            </section>
        </section>
    )
}

export default AlbumRelease;