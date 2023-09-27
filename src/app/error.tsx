"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 flex-col text-center">
      <h1>An error occurred</h1>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
