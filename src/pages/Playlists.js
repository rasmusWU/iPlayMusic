import './Playlists.css';
import PlaylistsOverview from '../components/PlaylistsOverview';
import PlaylistEntries from '../components/PlaylistEntries';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

function Playlists() {
    return (
        <section className="Playlists">
            <TopBar pagetitle="PLAYLISTS" />
            <NavBar/>
            <div><h1>Playlists</h1></div>
            <PlaylistsOverview playlist="Top 50 Rock Ballads" />
            <PlaylistEntries/>
        </section>
    )
}

export default Playlists;