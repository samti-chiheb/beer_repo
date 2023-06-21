import { StyledButton } from "./styles/Button.style";
import { StyledSelect } from "./styles/Select.styled";
import { StyledPagination } from "./styles/Pagination.styled";

const Pagination = ({
  query,
  currentPage,
  isLoading,
  lastPage,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;

  // set max pages
  const maxPages = !query
    ? parseInt(sessionStorage.getItem("last_page"))
    : parseInt(sessionStorage.getItem("last_query_page"));

  // set options for pagination
  const options = [];
  for (let i = 1; i <= maxPages; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  //pagination logic
  const handlePageChange = (e) => {
    onPageChange(e);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < lastPage) handlePageChange(currentPage + 1);
  };

  return (
    <StyledPagination>
      {/* Previous page */}
      {isFirstPage ? (
        <StyledButton disabled>Previous Page</StyledButton>
      ) : (
        <StyledButton onClick={handlePrevPage} disabled={isLoading}>
          Previous Page
        </StyledButton>
      )}

      {/* Current page */}
      <span>
        Current Page:
        {/* Page selection */}
        <StyledSelect value={currentPage} onChange={handlePageChange}>
          {options}
        </StyledSelect>
      </span>

      {/* Next page */}
      {lastPage == currentPage ? (
        <StyledButton disabled>Next Page</StyledButton>
      ) : (
        <StyledButton onClick={handleNextPage} disabled={isLoading}>
          Next Page
        </StyledButton>
      )}
    </StyledPagination>
  );
};

export default Pagination;
