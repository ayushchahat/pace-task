import { useState, useEffect } from "react";

export const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions(entry.contentRect);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return dimensions;
};
