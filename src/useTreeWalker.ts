import { useEffect, useRef } from 'react';

export const useTreeWalker = (
  root: Node,
  whatToShow?: number,
  filter?: NodeFilter | null
): TreeWalker => {
  const walker = useRef<TreeWalker>(null);

  useEffect(() => {
    walker.current = document.createTreeWalker(root, whatToShow, filter);
  }, [root, whatToShow, filter]);

  return walker.current;
};
