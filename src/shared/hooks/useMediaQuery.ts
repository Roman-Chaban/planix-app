import { useEffect, useState } from "react";

export function useMediaQuery(breakpoint: number): boolean | null {
  const query = `(max-width: ${breakpoint}px)`;

  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);

    const update = () => setMatches(media.matches);

    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}
