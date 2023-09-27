import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const spotifyShuffleCuratorUrl = new URL(
    "/projects/spotifyShuffleCurator",
    request.url,
  );

  if (
    request.nextUrl.pathname.startsWith(
      "/projects/spotifyShuffleCurator/callback",
    )
  ) {
    const { searchParams } = request.nextUrl;
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const state = searchParams.get("state");
    if (!code || error || !state) {
      !code &&
        console.log(
          "No Spotify authorisation code provided in Spotify middleware",
        );
      error && console.log("Error in Spotify middleware: ", error);
      !state &&
        console.log("No state parameter provided in Spotify middleware");
      return NextResponse.rewrite(spotifyShuffleCuratorUrl);
    }
    const redirectUri = new URL(
      "/projects/spotifyShuffleCurator/callback",
      request.url,
    ).toString();
    const grantType = "authorization_code";

    const requestAccessToken = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        body: `code=${code}&redirect_uri=${redirectUri}&grant_type=${grantType}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(
            `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
          )}`,
        },
      },
    );
    const { error: accessTokenError, access_token: accessToken } =
      await requestAccessToken.json();
    if (accessTokenError || !accessToken) {
      accessTokenError &&
        console.log(
          "Access token error in Spotify middleware: ",
          accessTokenError,
        );
      !accessToken &&
        console.log("No Spotify access token provided in Spotify middleware");
      return NextResponse.rewrite(spotifyShuffleCuratorUrl);
    }

    const response = NextResponse.redirect(spotifyShuffleCuratorUrl);
    response.cookies.set("spotifyAccessToken", accessToken);
    return response;
  }
}

export const config = {
  matcher: ["/projects/spotifyShuffleCurator/callback/:path*"],
};
