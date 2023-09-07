import type { WatchedMovie } from "../types";

import average from "../utils/average";

function WatchedSummary({ watched }: { watched: WatchedMovie[] }) {
  const avgImdbRating = average(
    watched.map((movie: WatchedMovie) => movie.imdbRating)
  );
  const avgUserRating = average(
    watched.map((movie: WatchedMovie) => movie.userRating)
  );
  const avgRuntime = average(
    watched.map((movie: WatchedMovie) => movie.runtime)
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
