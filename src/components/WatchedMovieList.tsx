import WatchedMovieItem from "./WatchedMovieItem";
import type { WatchedMovie } from "../types";

function WatchedMovieList({ watched }: { watched: WatchedMovie[] }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
