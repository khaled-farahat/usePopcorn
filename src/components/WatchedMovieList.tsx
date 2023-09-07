import WatchedMovieItem from "./WatchedMovieItem";
import type { WatchedMovie } from "../types";

type Props = {
  watched: WatchedMovie[];
  onRemoveWatched: (id: string) => void;
};

function WatchedMovieList({ watched, onRemoveWatched }: Props) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieItem
          key={movie.imdbID}
          movie={movie}
          onRemoveWatched={onRemoveWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
