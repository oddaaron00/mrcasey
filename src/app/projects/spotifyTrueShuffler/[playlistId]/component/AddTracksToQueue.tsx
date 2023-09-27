"use client";

import { Track } from "../../app/types";
import { addTracksToQueue } from "../functions";

interface IAddTracksToQueue {
  accessToken: string;
  tracks: Track[];
}

const AddTracksToQueue: React.FC<IAddTracksToQueue> = ({
  accessToken,
  tracks,
}) => (
  <button onClick={() => addTracksToQueue(accessToken, tracks, 3)}>
    Add 3 Tracks To Queue
  </button>
);

export default AddTracksToQueue;
