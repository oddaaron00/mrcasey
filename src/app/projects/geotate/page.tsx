import Title from "@/app/components/Title";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";

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
