import Subtitle from "@/app/components/Subtitle";
import Image from "next/image";

interface IScoreScreen {
  scores: Record<string, unknown>[];
  cumulativeScore: number;
}

export default function ScoreScreen({ scores, cumulativeScore }: IScoreScreen) {
  return (
    <section>
      <table className="w-screen">
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ city, country, code, points }) => (
            <tr key={`${city}, ${country}`}>
              <td className="w-1/3">{city as string}</td>
              <td className="my-2 flex items-center justify-center">
                <span className="mx-2">{country as string}</span>
                <div className="relative h-8 w-16">
                  <Image
                    alt={`Flag of ${country}`}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td className="w-1/3">{points as string}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Subtitle
        text={`You scored ${cumulativeScore} points.`}
        extraClasses="m-16"
      />
    </section>
  );
}
