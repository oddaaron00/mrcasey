import { Metadata } from "next";
import { ProjectContainer } from "../components";

export const metadata: Metadata = {
  title: "Spotify Shuffle Curator | mrcasey",
  description:
    "Spotify Shuffler Curator | Casey Goodings – Software Engineer and Developer",
  robots: "index, nofollow",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ProjectContainer
      title="Spotify Shuffle Curator"
      githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/spotifyShuffleCurator"
    >
      {props.children}
    </ProjectContainer>
  );
}
