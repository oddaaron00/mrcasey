import { Title } from "@/app/components";
import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { GoToGithub } from "../../components";

export const metadata: Metadata = {
  title: "mrcasey | True Spotify Shuffler",
  description:
    "Casey Goodings – Software Engineer and Developer | True Spotify Shuffler",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

export default function TrueSpotifyShuffler() {
  return (
    <main className="flex-1 flex-col text-center">
      <div className="p-2">
        <Title text="Geotate" />
        <GoToGithub href="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/trueSpotifyShuffler" />
      </div>
      <App />
    </main>
  );
}
