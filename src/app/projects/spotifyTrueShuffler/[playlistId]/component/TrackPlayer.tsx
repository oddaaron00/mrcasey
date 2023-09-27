import { cookies } from "next/headers";
import { AddTracksToQueue } from ".";
import { Track } from "../../app/types";

interface ITrackPlayer {
  tracks: Track[];
}

const TrackPlayer: React.FC<ITrackPlayer> = ({ tracks }) => {
  const accessToken = cookies().get("spotifyAccessToken")?.value!;
  return (
    <section>
      <AddTracksToQueue accessToken={accessToken} tracks={tracks} />
    </section>
  );
};

export default TrackPlayer;
