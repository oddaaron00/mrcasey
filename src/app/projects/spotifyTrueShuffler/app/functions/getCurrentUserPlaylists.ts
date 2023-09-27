const getCurrentUserPlaylists = (accessToken: string): Promise<string> =>
  fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((result) => result.json());

export default getCurrentUserPlaylists;
