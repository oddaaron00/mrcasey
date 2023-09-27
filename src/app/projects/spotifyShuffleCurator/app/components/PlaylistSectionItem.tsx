import Link from "next/link";
import { Playlist } from "../types";

interface IPlaylistSectionItem {
  playlist: Playlist;
}

const PlaylistSectionItem: React.FC<IPlaylistSectionItem> = ({ playlist }) => {
  return (
    <li className="p-1">
      <Link
        href={`/projects/spotifyShuffleCurator/${playlist.id}`}
        className="inline-block w-full rounded-lg px-8 py-2 text-xl hover:bg-black-90"
      >
        {playlist.name}
      </Link>
    </li>
  );
};

export default PlaylistSectionItem;
