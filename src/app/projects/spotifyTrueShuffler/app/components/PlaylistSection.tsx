import { Playlist } from "../types";
import PlaylistSectionItem from "./PlaylistSectionItem";

interface IPlaylistsSection {
  playlists: Playlist[];
}

const PlaylistSection: React.FC<IPlaylistsSection> = ({ playlists }) => {
  return (
    <section>
      {playlists.map((playlist) => (
        <PlaylistSectionItem key={playlist.id} playlist={playlist} />
      ))}
    </section>
  );
};

export default PlaylistSection;
