import { Track } from "../../app/types";

const addTracksToQueue = async (
  accessToken: string,
  tracks: Track[],
  count: number,
) => {
  const trackIndices: number[] = [];
  for (let i = 0; i < count; i++) {
    trackIndices.push(Math.floor(Math.random() * tracks.length));
  }

  await Promise.allSettled(
    trackIndices.map((trackIndex) =>
      addTrackToQueue(accessToken, tracks[trackIndex].uri),
    ),
  );
};

const addTrackToQueue = async (accessToken: string, uri: string) =>
  fetch(
    `https://api.spotify.com/v1/me/player/queue?uri=${encodeURIComponent(uri)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

export default addTracksToQueue;
