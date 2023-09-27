import { cookies } from "next/headers";
import getPlaylistItems from "../app/functions/getPlaylistItems";

interface IPlaylistPage {
  params: {
    playlistId: string;
  };
}

const PlaylistPage: React.FC<IPlaylistPage> = async ({
  params: { playlistId },
}) => {
  const accessToken = cookies().get("spotifyAccessToken")?.value;
  if (!accessToken) throw new Error("No Spotify access token cookie");
  const playlist = await getPlaylistItems(accessToken, playlistId);

  return <main className="flex-1 flex-col text-center">PlaylistPage</main>;
};

export default PlaylistPage;
