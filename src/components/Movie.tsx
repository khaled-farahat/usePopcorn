import type { Movie as MovieType } from "../types";

type Props = {
  movie: MovieType;
  onSelectMovie: (id: string) => void;
};

function Movie({ movie, onSelectMovie }: Props) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
