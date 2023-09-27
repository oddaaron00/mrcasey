"use client";

import { useEffect, useState } from "react";
import getCurrentUserPlaylists from "../functions/getCurrentUserPlaylists";
import { Playlist } from "../types";
import PlaylistSectionItem from "./PlaylistSectionItem";

interface IPlaylistsSection {
  accessToken: string;
}

const PlaylistSection: React.FC<IPlaylistsSection> = ({ accessToken }) => {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    const callback = async () => {
      const items = (await getCurrentUserPlaylists(accessToken))
        .items as Record<string, unknown>[];
      const playlistItems: Playlist[] = items.map((item) => ({
        id: item.id as string,
      }));

      setPlaylists(playlistItems);
    };
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {playlists === null
        ? "Loading..."
        : playlists.map((playlist) => (
            <PlaylistSectionItem key={playlist.id} playlist={playlist} />
          ))}
    </section>
  );
};

export default PlaylistSection;
