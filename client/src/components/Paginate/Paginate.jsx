import React from "react";
import styles from "./Paginate.module.css";

export default function Paginate({ coursesPerPage, allCourses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  /* let pages = []; */

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
