import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "../components";

export const metadata: Metadata = {
  title: "mrcasey | Spotify True Shuffler",
  description:
    "Casey Goodings – Software Engineer and Developer | Spotify True Shuffler",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

export default function SpotifyTrueShuffler() {
  return (
    <>
      <Header
        title="Spotify True Shuffler"
        githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/spotifyTrueShuffler"
      />
      <main className="flex-1 flex-col text-center">
        <App />
      </main>
    </>
  );
}
