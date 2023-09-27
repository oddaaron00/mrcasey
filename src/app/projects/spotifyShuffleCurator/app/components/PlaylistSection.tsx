import { Playlist } from "../types";
import PlaylistSectionItem from "./PlaylistSectionItem";

interface IPlaylistsSection {
  playlists: Playlist[];
}

const PlaylistSection: React.FC<IPlaylistsSection> = ({ playlists }) => {
  return (
    <ul>
      {playlists.map((playlist) => (
        <PlaylistSectionItem key={playlist.id} playlist={playlist} />
      ))}
    </ul>
  );
};

export default PlaylistSection;
