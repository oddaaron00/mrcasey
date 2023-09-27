"use client";

import getCurrentUserPlaylists from "../functions/getCurrentUserPlaylists";

interface IPlaylistsSection {
  accessToken: string;
}

const PlaylistsSection: React.FC<IPlaylistsSection> = ({ accessToken }) => {
  return (
    <section>
      <button
        onClick={async () => {
          const result = await getCurrentUserPlaylists(accessToken);
          console.log("result:", result);
        }}
      >
        Get Current User Playlists
      </button>
    </section>
  );
};

export default PlaylistsSection;
