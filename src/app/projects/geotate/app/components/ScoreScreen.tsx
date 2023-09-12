import "./ScoreScreen.css";

interface IScoreScreen {
  scores: Record<string, unknown>[];
  cumulativeScore: number;
}

export default function ScoreScreen({ scores, cumulativeScore }: IScoreScreen) {
  return (
    <section>
      <table style={{ width: 500 }}>
        <thead id="tableHeader">
          <tr>
            <th>City</th>
            <th>Country</th>
            <th id="pointsHeader">Points</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ city, country, code, points }) => (
            <tr key={`${city}, ${country}`}>
              <td>{city as string}</td>
              <td className="tableRow countryRow">
                {country as string}
                <img
                  className="tableFlag"
                  alt={`Flag of ${country}`}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                  height={40}
                />
              </td>
              <td className="tableRow pointsRow">{points as string}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>You scored {cumulativeScore} points.</p>
    </section>
  );
}
