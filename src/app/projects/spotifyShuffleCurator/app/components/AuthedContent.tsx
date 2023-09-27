import { Suspense } from "react";
import { PlaylistSection } from ".";
import getCurrentUserPlaylists from "../functions/getCurrentUserPlaylists";

interface IAuthedApp {
  accessToken: string;
}

const AuthedContent: React.FC<IAuthedApp> = async ({ accessToken }) => {
  const playlists = await getCurrentUserPlaylists(accessToken);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PlaylistSection playlists={playlists} />
      </Suspense>
    </>
  );
};

export default AuthedContent;
