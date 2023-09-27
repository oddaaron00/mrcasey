import { PlaylistsSection } from ".";

interface IAuthedApp {
  accessToken: string;
}

const AuthedContent: React.FC<IAuthedApp> = ({ accessToken }) => {
  return (
    <>
      <PlaylistsSection accessToken={accessToken} />
    </>
  );
};

export default AuthedContent;
