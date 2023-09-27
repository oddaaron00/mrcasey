import { Track } from "../../app/types";

const getPlaylistItems = (
  accessToken: string,
  playlistId: string,
  total: number,
): Promise<Track[]> => {
  return getPlaylistItemsWithOffset(accessToken, playlistId, 0);
};

const getPlaylistItemsWithOffset = (
  accessToken: string,
  playlistId: string,
  offset: number,
): Promise<Track[]> =>
  fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items%28track%28id%29%29&limit=100&offset=${offset}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
    .then((result) => result.json())
    .then((json) => json.items)
    .then((items: Record<string, unknown>[]) =>
      items.map((item) => item.track as Record<string, unknown>),
    )
    .then((tracks: Record<string, unknown>[]) =>
      tracks.map((track) => ({ id: track.id }) as Track),
    );

export default getPlaylistItems;
