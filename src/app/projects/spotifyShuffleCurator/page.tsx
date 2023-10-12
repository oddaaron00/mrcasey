import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./app/App"), {
  ssr: false,
  loading: Loading,
});

const SpotifyShuffleCurator: React.FC<{}> = () => <App />;

export default SpotifyShuffleCurator;
