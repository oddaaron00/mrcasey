const getPlaylistItems = (
  accessToken: string,
  playlistId: string,
): Promise<Record<string, unknown>> =>
  fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=limit%2Ctotal`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
    .then((result) => result.json())
    .then((json) => ({ limit: json.limit, total: json.total }));

export default getPlaylistItems;
