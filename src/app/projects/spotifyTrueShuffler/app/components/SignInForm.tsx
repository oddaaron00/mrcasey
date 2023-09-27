import { randomBytes } from "crypto";
import { redirect } from "next/navigation";

const SignInForm: React.FC<{}> = () => {
  const spotifySignIn = async () => {
    "use server";

    const responseType = "code";
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    if (!clientId) return;
    const scope =
      "playlist-read-collaborative playlist-read-private user-read-email user-read-private";
    const redirectUri = new URL(
      "/projects/spotifyTrueShuffler/callback",
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.mrcasey.com",
    ).toString();
    console.log("redirectUri:", redirectUri);
    const state = randomBytes(20).toString("hex");

    const fullUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;

    redirect(fullUrl);
  };

  return (
    <form action={spotifySignIn}>
      <button type="submit">Sign In To Spotify</button>
    </form>
  );
};

export default SignInForm;
