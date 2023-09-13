import Title from "@/app/components/Title";
import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

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
    <main className="flex-1 flex-col text-center">
      <Title text="Geotate" />
      <App />
    </main>
  );
}
