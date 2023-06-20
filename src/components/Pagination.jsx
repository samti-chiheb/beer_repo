
const Pagination = ({
  query,
  currentPage,
  onPrevPage,
  onNextPage,
  isLoading,
  lastPage,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const maxPages = !query ? parseInt(sessionStorage.getItem("last_page")) : parseInt(sessionStorage.getItem("last_query_page"));

  const handlePageChange = (e) => {
    const selectedPage = parseInt(e.target.value);
    onPageChange(selectedPage);
  };

  const options = [];
  for (let i = 1; i <= maxPages; i++) {
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
