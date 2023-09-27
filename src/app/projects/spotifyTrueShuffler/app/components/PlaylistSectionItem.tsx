import Link from "next/link";
import { Playlist } from "../types";

interface IPlaylistSectionItem {
  playlist: Playlist;
}

const PlaylistSectionItem: React.FC<IPlaylistSectionItem> = ({ playlist }) => {
  return (
    <li>
      <Link href={`/projects/spotifyTrueShuffler/${playlist.id}`}>
        {playlist.name}
      </Link>
    </li>
  );
};

export default PlaylistSectionItem;
