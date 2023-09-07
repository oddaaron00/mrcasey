import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="text-center">
      <div className="p-2">
        <Title text="mrcasey" extraClasses="pb-1" />
        <Subtitle text="That's me :)" extraClasses="pt-1" />
      </div>
    </main>
  );
}
