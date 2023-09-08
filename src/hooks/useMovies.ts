import { useState, useEffect } from "react";
import type { Movie } from "../types";

const KEY = "d454e6c7";

export const useMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const data = await res.json();
        if (data.Error) throw new Error(data.Error);

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message || "An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    // handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
