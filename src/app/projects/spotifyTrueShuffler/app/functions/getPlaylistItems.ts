const getPlaylistItems = (
  accessToken: string,
  playlistId: string,
): Promise<Record<string, unknown>> =>
  fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((result) => result.json());

export default getPlaylistItems;
