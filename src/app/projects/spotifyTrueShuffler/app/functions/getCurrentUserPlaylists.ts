import { Playlist } from "../types";

const getCurrentUserPlaylists = (accessToken: string): Promise<Playlist[]> =>
  fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => result.json())
    .then((json) => json.items)
    .then((items: Record<string, unknown>[]) =>
      items.map((item) => ({ id: item.id }) as Playlist),
    );

export default getCurrentUserPlaylists;
