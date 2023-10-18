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
      description="I watched this YouTube video regarding Spotify not shuffling randomly (https://youtu.be/OdLyKETk5o0?si=ijMK_RkCXkjivCCc) and thought I could code up a solution. It's very limited right now, but I'll make improvements over time."
    >
      {props.children}
    </ProjectContainer>
  );
}
