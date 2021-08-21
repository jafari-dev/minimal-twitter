import { useState, useCallback, useMemo, memo } from "react";
import { PageItem } from "react-bootstrap";

import { StyledPagination } from "./styles";

interface Props {
  maxPages: number;
  onChangeActivePage: (pageNumber: number) => void;
}

function PaginationComponent({
  maxPages,
  onChangeActivePage,
}: Props): React.ReactElement {
  const [activePageNumber, setActivePageNumber] = useState(1);

  const middlePageNumber = useMemo(
    () =>
      activePageNumber <= 3
        ? 3
        : activePageNumber >= maxPages - 2
        ? maxPages - 2
        : activePageNumber,
    [activePageNumber, maxPages]
  );

  const handlePageClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const value = event.currentTarget.textContent;
      let selectedPage = 0;

      switch (value) {
        case "First":
          if (activePageNumber === 1) return;
          selectedPage = 1;
          break;
        case "Last":
          if (activePageNumber === maxPages) return;
          selectedPage = maxPages;
          break;
        default:
          if (activePageNumber === Number(value)) return;
          selectedPage = Number(value);
      }

      window.scrollTo({ top: 0 });
      event.currentTarget.blur();
      setActivePageNumber(selectedPage);
      onChangeActivePage(selectedPage);
    },
    [activePageNumber, maxPages, onChangeActivePage]
  );

  return (
    <StyledPagination>
      <PageItem
        activeLabel=""
        disabled={activePageNumber === 1 || maxPages < 2}
        onClick={handlePageClick}
        children="First"
      />
      <PageItem
        activeLabel=""
        disabled={maxPages < 1}
        active={activePageNumber === 1}
        onClick={handlePageClick}
        children={middlePageNumber - 2}
      />
      <PageItem
        activeLabel=""
        disabled={maxPages < 2}
        active={activePageNumber === 2}
        onClick={handlePageClick}
        children={middlePageNumber - 1}
      />
      <PageItem
        activeLabel=""
        disabled={maxPages < 3}
        active={activePageNumber >= 3 && activePageNumber <= maxPages - 2}
        onClick={handlePageClick}
        children={middlePageNumber}
      />
      <PageItem
        activeLabel=""
        disabled={maxPages < 4}
        active={activePageNumber === maxPages - 1}
        onClick={handlePageClick}
        children={middlePageNumber + 1}
      />
      <PageItem
        activeLabel=""
        disabled={maxPages < 5}
        active={activePageNumber === maxPages}
        onClick={handlePageClick}
        children={middlePageNumber + 2}
      />
      <PageItem
        activeLabel=""
        disabled={activePageNumber === maxPages || maxPages < 5}
        onClick={handlePageClick}
        children="Last"
      />
    </StyledPagination>
  );
}

export default memo(PaginationComponent);
