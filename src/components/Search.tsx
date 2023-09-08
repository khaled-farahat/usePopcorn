import { useRef } from "react";
import { useKey } from "../hooks/useKey";

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

function Search({ query, setQuery }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function action() {
    if (document.activeElement === inputRef.current) return;
    inputRef.current?.focus();
    setQuery("");
  }

  useKey("Enter", action);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}

export default Search;
