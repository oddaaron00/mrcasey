import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectContainer } from "../components";

export const metadata: Metadata = {
  title: "mrcasey | Spotify Shuffle Curator",
  description:
    "Casey Goodings – Software Engineer and Developer | Spotify Shuffler Curator",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

const SpotifyShuffleCurator: React.FC<{}> = () => (
  <ProjectContainer
    title="Spotify Shuffle Curator"
    githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/spotifyShuffleCurator"
  >
    <App />
  </ProjectContainer>
);

export default SpotifyShuffleCurator;
