import React from "react";
/* import styles from "./Paginate.module.css"; */

export default function Paginate({ coursesPerPage, allCourses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="btnPag">
      {/* {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))} */}
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </nav>
  );
}
