import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "../components";

export const metadata: Metadata = {
  title: "mrcasey | Geotate",
  description: "Casey Goodings – Software Engineer and Developer | Geotate",
  robots: "index, nofollow",
};

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

export default function Geotate() {
  return (
    <>
      <Header
        title="Geotate"
        githubHref="https://github.com/oddaaron00/mrcasey/tree/main/src/app/projects/geotate"
      />
      <main className="flex-1 flex-col text-center">
        <App />
      </main>
    </>
  );
}
