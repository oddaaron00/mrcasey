import { redirect } from "next/navigation";

export default function App() {
  const spotifySignIn = async (formData: FormData) => {
    "use server";

    const responseType = "code";
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    if (!clientId) return;
    const scope = "user-read-email";
    const redirectUri = new URL(
      "/projects/spotifyTrueShuffler/callback",
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.mrcasey.com",
    ).toString();
    console.log("redirectUri:", redirectUri);
    const state = "TEST_STATE";

    const fullUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;

    redirect(fullUrl);
  };

  return (
    <article className="flex flex-col items-center">
      <form action={spotifySignIn}>
        <button type="submit">Sign In To Spotify</button>
      </form>
    </article>
  );
}
