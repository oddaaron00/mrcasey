import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectContainer } from "../components";

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

const SpotifyTrueShuffler: React.FC<{}> = () => (
  <ProjectContainer
    title="Spotify True Shuffler"
    githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/spotifyTrueShuffler"
  >
    <App />
  </ProjectContainer>
);

export default SpotifyTrueShuffler;
