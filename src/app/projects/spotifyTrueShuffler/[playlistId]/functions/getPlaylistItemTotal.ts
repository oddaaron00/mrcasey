const getPlaylistItemTotal = (
  accessToken: string,
  playlistId: string,
): Promise<number> =>
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
    .then((json) => json.total);

export default getPlaylistItemTotal;
