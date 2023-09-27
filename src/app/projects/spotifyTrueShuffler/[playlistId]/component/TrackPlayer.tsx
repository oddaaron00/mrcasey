import { NextTrack } from ".";
import { Track } from "../../app/types";

interface ITrackPlayer {
  tracks: Track[];
}

const TrackPlayer: React.FC<ITrackPlayer> = ({ tracks }) => {
  return (
    <section>
      <NextTrack />
    </section>
  );
};

export default TrackPlayer;
