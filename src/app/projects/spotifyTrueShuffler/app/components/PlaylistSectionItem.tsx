import { Playlist } from "../types";

interface IPlaylistSectionItem {
  playlist: Playlist;
}

const PlaylistSectionItem: React.FC<IPlaylistSectionItem> = ({ playlist }) => {
  return <div>{playlist.id}</div>;
};

export default PlaylistSectionItem;
