import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectContainer } from "../components";

export const metadata: Metadata = {
  title: "mrcasey | Geotate",
  description: "Casey Goodings – Software Engineer and Developer | Geotate",
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
  >
    <App />
  </ProjectContainer>
);

export default Geotate;
