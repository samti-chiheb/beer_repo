
const Pagination = ({
  currentPage,
  onPrevPage,
  onNextPage,
  isLoading,
  lastPage,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const maxBeerPages = parseInt(sessionStorage.getItem("last_page"));

  const handlePageChange = (e) => {
    const selectedPage = parseInt(e.target.value);
    onPageChange(selectedPage);
  };

  const options = [];

  for (let i = 1; i <= maxBeerPages; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      {/* Previous page */}
      {isFirstPage ? (
        <button disabled>Previous Page</button>
      ) : (
        <button onClick={onPrevPage} disabled={isLoading}>
          Previous Page
        </button>
      )}

      {/* Current page */}
      <span>
        Current Page: 
        {/* Page selection */}
        <select value={currentPage} onChange={handlePageChange}>
          {options}
        </select>
      </span>
      {/* Next page */}
      {lastPage == currentPage ? (
        <button disabled>Next Page</button>
      ) : (
        <button onClick={onNextPage} disabled={isLoading}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
