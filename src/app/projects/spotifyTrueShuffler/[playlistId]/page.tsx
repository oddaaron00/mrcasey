import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getPlaylistItemTotal, getPlaylistItems } from "./functions";

interface IPlaylistPage {
  params: {
    playlistId: string;
  };
}

const PlaylistPage: React.FC<IPlaylistPage> = async ({
  params: { playlistId },
}) => {
  const accessToken = cookies().get("spotifyAccessToken")?.value;
  if (!accessToken) redirect("/projects/spotifyTrueShuffler");
  const total = await getPlaylistItemTotal(accessToken, playlistId);
  const playlistItems = await getPlaylistItems(accessToken, playlistId, total);

  return <main className="flex-1 flex-col text-center">PlaylistPage</main>;
};

export default PlaylistPage;
