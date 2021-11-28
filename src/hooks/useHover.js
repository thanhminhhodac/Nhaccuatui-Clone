// libs
import { useState, useRef, useEffect } from 'react';
// hooks

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseout', handleMouseOut);
      node.addEventListener('mouseover', handleMouseOver);
    } else return false;
    return () => {
      node.removeEventListener('mouseout', handleMouseOut);
      node.removeEventListener('mouseover', handleMouseOver);
    };
  }, [ref.current]);

  return [isHover, ref];
};
