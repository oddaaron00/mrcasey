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
                <Image
                  alt={`Flag of ${country}`}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                  height={20}
                  width={70}
                />
              </td>
              <td className="w-1/3">{points as string}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>You scored {cumulativeScore} points.</p>
    </section>
  );
}
