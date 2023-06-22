import React from "react";
import styles from "../assests/css/PaginationStyle.module.css";

const Pagination = ({
  pageNumbers,
  currentPage,
  setCurrentPage,
  totalPage,
  startPage,
  endPage,
}) => {
  const goPreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const changePage = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.nextPrev}
        onClick={goPreviousPage}
        disabled={currentPage === startPage ? "disabled" : ""}
      >
        Previous
      </button>

      {/* {pageNumbers.map((page, index) => (
        <button key={index} onClick={() => changePage(page)} className={currentPage === page && styles.active}>{page}</button>
      ))} */}

      {startPage > 1 && <button onClick={() => setCurrentPage(1)}>1</button>}
      {startPage > 2 && <span> ... </span>}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? styles.active : ""}
        >
          {page}
        </button>
      ))}
      {endPage < totalPage - 1 && <span> ... </span>}
      {endPage < totalPage && (
        <button onClick={() => setCurrentPage(totalPage)}>{totalPage}</button>
      )}

      <button
        className={styles.nextPrev}
        onClick={goNextPage}
        disabled={currentPage === endPage ? "disabled" : ""}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
