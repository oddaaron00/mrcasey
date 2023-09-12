import { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import { PaddedSection } from "./components/Section";
import Title from "./components/Title";

export const metadata: Metadata = {
  robots: "index, nofollow",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex-col text-center">
        <div className="p-2">
          <Title text="mrcasey" extraClasses="pb-1" />
          <span className="pt-1 text-xl">{"That's me :)"}</span>
        </div>
        <PaddedSection id="about" subtitle="About Me">
          <p>Coming soon</p>
        </PaddedSection>
        <PaddedSection id="projects" subtitle="Projects">
          <Link href="/projects/geotate">Geotate</Link>
        </PaddedSection>
        <PaddedSection id="cv" subtitle="CV">
          <p>Coming soon</p>
        </PaddedSection>
      </main>
    </>
  );
}
