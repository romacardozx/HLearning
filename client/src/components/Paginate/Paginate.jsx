import React from "react";
import styles from "./Paginate.module.css";
/* import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack"; */

export default function Paginate({ coursesPerPage, allCourses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button
            className={styles.btn}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
    </nav>
  );
}

/* const pages = pageNumbers.pop() - 1;
console.log("PAGINAS:", pages); */
/*      <div>
          <Stack spacing={2}>
            <Pagination count={pages} onChange={paginate(number)} />
          </Stack>
        </div> */
