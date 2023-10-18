import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectContainer } from "../components";

export const metadata: Metadata = {
  title: "Geotate | mrcasey",
  description: "Geotate | Casey Goodings – Software Engineer and Developer",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

const Geotate: React.FC<{}> = () => (
  <ProjectContainer
    title="Geotate"
    githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/geotate"
    description="One day, I thought, 'How about a game like Geoguessr but with bearings,' and thus Geotate was born. This is more of a tech demo rather than a fully-fledged game, but I'll add improvements over time."
  >
    <App />
  </ProjectContainer>
);

export default Geotate;
