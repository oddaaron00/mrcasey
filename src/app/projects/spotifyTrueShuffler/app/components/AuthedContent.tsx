"use client";

import getCurrentUserProfile from "../functions/getCurrentUserId";

interface IAuthedApp {
  accessToken: string;
}

const AuthedContent: React.FC<IAuthedApp> = ({ accessToken }) => {
  return (
    <>
      <button
        onClick={async () => {
          const result = await getCurrentUserProfile(accessToken);
          console.log("result:", result);
        }}
      >
        Get Current User Id
      </button>
    </>
  );
};

export default AuthedContent;
