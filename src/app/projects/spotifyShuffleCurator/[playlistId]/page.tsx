import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { TrackPlayer } from "./component";
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
  if (!accessToken) redirect("/projects/spotifyShuffleCurator");
  const total = await getPlaylistItemTotal(accessToken, playlistId);
  const playlistTracks = await getPlaylistItems(accessToken, playlistId, total);

  return (
    <main className="flex-1 flex-col text-center">
      <Suspense fallback={<div>Loading...</div>}>
        <TrackPlayer tracks={playlistTracks} />
      </Suspense>
    </main>
  );
};

export default PlaylistPage;
