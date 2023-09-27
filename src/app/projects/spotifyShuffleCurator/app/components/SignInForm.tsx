import { randomBytes } from "crypto";
import { redirect } from "next/navigation";

const SignInForm: React.FC<{}> = () => {
  const spotifySignIn = async () => {
    "use server";

    const responseType = "code";
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    if (!clientId) return;
    const scope = "playlist-read-private user-modify-playback-state";
    const redirectUri = new URL(
      "/projects/spotifyShuffleCurator/callback",
      process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI_BASE,
    ).toString();
    console.log("redirectUri:", redirectUri);
    const state = randomBytes(20).toString("hex");

    const fullUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&show_dialog=true`;

    redirect(fullUrl);
  };

  return (
    <form action={spotifySignIn}>
      <button type="submit">Sign In To Spotify</button>
    </form>
  );
};

export default SignInForm;
