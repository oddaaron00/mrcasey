import { Track } from "../../app/types";

const getPlaylistItems = async (
  accessToken: string,
  playlistId: string,
  total: number,
): Promise<Track[]> => {
  const tracks: Track[] = [];
  for (let offset = 0; offset < total; offset += 100) {
    const offsetTracks = await getPlaylistItemsWithOffset(
      accessToken,
      playlistId,
      offset,
    );
    tracks.push(...offsetTracks);
  }
  return tracks;
};

const getPlaylistItemsWithOffset = (
  accessToken: string,
  playlistId: string,
  offset: number,
): Promise<Track[]> =>
  fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items%28track%28id%2Cname%2Curi%29%29&limit=100&offset=${offset}`,
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
      tracks.map(
        (track) =>
          ({ id: track.id, name: track.name, uri: track.uri }) as Track,
      ),
    );

export default getPlaylistItems;
