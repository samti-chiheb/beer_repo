import { useNavigate } from "react-router-dom";
import ListTable from "../components/ListTable";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Filter from "../components/Filter";
import useBeerList from "../hook/useBeerList";
import useBeerSearch from "../hook/useBeerSearch";
import useBeerFilter from "../hook/useBeerFilter";

const BeerList = () => {
  const navigate = useNavigate();
  // List data and handlers
  const list = useBeerList();
  // Search data and handlers
  const search = useBeerSearch();
  // Filter data and handlers
  const filter = useBeerFilter();

  const getDisplayConfig = () => {
    if (search.searchTerm) {
      return search;
    } else if (Object.keys(filter.filterParams).length > 0) {
      return filter;
    }else{
      return list;
    }
  };
  console.log(getDisplayConfig);
  const {
    data: displayList,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = getDisplayConfig();

  const handleClick = (id) => {
    navigate(`/beer/${id}`);
  };

  return (
    <div>
      <h1>Beer List</h1>
      <button onClick={() => sessionStorage.clear()}>Clear cache</button>
      <Search onSearch={search.handleSearch} />
      <Filter
        filterParams={filter.filterParams}
        onFilterChange={filter.handleFilterChange}
      />
      <ListTable beers={displayList} onClick={handleClick} />
      <Pagination
        currentPage={currentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        isLoading={isLoading}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BeerList;