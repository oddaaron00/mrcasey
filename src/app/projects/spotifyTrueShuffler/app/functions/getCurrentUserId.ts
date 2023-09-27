const getCurrentUserId = (accessToken: string): Promise<string> =>
  fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => result.json())
    .then((json) => json.id);

export default getCurrentUserId;
