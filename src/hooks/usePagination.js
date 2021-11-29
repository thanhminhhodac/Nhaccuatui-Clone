// libs
import { useState } from 'react';
// hook
import { useEventListener } from './useEventListener';
import { useHover } from './useHover';

export const usePagination = ({ currentPage, itemsPerPage, totalItem }) => {
  const [current, setCurrent] = useState(currentPage);
  const [isHover, ref] = useHover();

  const totalPage = Math.ceil(totalItem / itemsPerPage);
  const beginItem = (current - 1) * itemsPerPage;
  const endItem = beginItem + itemsPerPage;

  const handleOnChangePage = (page) => setCurrent(page);
  const handleKeyDown = (e) => {
    if (isHover) {
      switch (e.key) {
        case 'PageUp':
          {
            e.preventDefault();
            const nextPage = current + 1;
            if (nextPage <= totalPage) handleOnChangePage(nextPage);
          }
          break;
        case 'PageDown':
          {
            e.preventDefault();
            const nextPage = current - 1;
            if (nextPage >= 1) setCurrent(nextPage);
          }
          break;
        default:
          return setCurrent(current);
      }
    }
  };

  useEventListener('keydown', handleKeyDown);

  return [current, beginItem, endItem, handleOnChangePage, ref];
};
