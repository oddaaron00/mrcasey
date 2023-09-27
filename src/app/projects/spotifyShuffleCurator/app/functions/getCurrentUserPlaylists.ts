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
      items.map((item) => ({ id: item.id, name: item.name }) as Playlist),
    )
    .then((playlists) => {
      playlists.sort((a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
      );
      return playlists;
    });

export default getCurrentUserPlaylists;
