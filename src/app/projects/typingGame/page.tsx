import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectContainer } from "../components";

export const metadata: Metadata = {
  title: "Typing Game | mrcasey",
  description: "Typing Game | Casey Goodings – Software Engineer and Developer",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

const TypingGame: React.FC<{}> = () => (
  <ProjectContainer
    title="Typing Game"
    githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/typingGame"
    description=""
  >
    <App />
  </ProjectContainer>
);

export default TypingGame;
