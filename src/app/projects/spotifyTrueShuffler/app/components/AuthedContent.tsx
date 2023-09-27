import { PlaylistSection } from ".";

interface IAuthedApp {
  accessToken: string;
}

const AuthedContent: React.FC<IAuthedApp> = ({ accessToken }) => {
  return (
    <>
      <PlaylistSection accessToken={accessToken} />
    </>
  );
};

export default AuthedContent;
