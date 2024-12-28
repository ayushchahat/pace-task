import { useEffect } from "react";

type ScrollPosition = {
  prevPos: { x: number; y: number };
  currPos: { x: number; y: number };
};

export const useScrollPosition = (
  effect: (position: ScrollPosition) => void,
  deps: React.DependencyList
): void => {
  useEffect(() => {
    let prevPos = { x: 0, y: 0 };

    const handleScroll = () => {
      const currPos = { x: window.scrollX, y: window.scrollY };
      effect({ prevPos, currPos });
      prevPos = currPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
};
