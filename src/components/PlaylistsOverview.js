import './PlaylistsOverview.css';

function PlaylistsOverview({playlist}) {
    return (
        <section className="PlaylistsOverview">
            <div className="PlaylistsOverviewImgs">
            <img className="PlaylistImg" src="https://via.placeholder.com/300" alt=""/>
            <img className="PlaylistImg MidImg" src="https://via.placeholder.com/300" alt=""/>
            <img className="PlaylistImg" src="https://via.placeholder.com/300" alt=""/>
            </div>
            <h3>{playlist}</h3>
        </section>
    )
}

export default PlaylistsOverview;