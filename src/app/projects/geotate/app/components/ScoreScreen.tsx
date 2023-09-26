import { Subtitle } from "@/app/components";
import Image from "next/image";

interface IScoreScreen {
  scores: Record<string, unknown>[];
  cumulativeScore: number;
}

export default function ScoreScreen({ scores, cumulativeScore }: IScoreScreen) {
  return (
    <section className="w-screen">
      <div className="flex justify-center p-16">
        <table className="w-3/5">
          <thead>
            <tr>
              <th className="text-left">Location</th>
              <th></th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(({ city, country, code, points }) => (
              <tr key={`${city}, ${country}`}>
                <td className="w-2/3 text-left">{`${city}, ${country}`}</td>
                <td className="my-1 flex justify-center">
                  <div className="relative h-8 w-16">
                    <Image
                      alt={`Flag of ${country}`}
                      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td className="w-1/6">{points as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Subtitle
        text={`You scored ${cumulativeScore} points.`}
        extraClasses="m-16"
      />
    </section>
  );
}
