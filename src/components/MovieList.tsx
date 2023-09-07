import Movie from "./Movie";
import type { Movie as MovieType } from "../types";

function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: MovieType[];
  onSelectMovie: (id: string) => void;
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
