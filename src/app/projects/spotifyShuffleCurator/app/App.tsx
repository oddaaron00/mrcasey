import { cookies } from "next/headers";
import { AuthedContent, SignInForm } from "./components";

const App = () => {
  const accessToken = cookies().get("spotifyAccessToken")?.value;
  return (
    <article className="flex flex-col items-center">
      {!accessToken ? (
        <SignInForm />
      ) : (
        <AuthedContent accessToken={accessToken} />
      )}
    </article>
  );
};

export default App;
