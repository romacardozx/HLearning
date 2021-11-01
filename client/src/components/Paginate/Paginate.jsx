import React from "react";

/* import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system"; */

/* import styles from "./Paginate.module.css"; */

export default function Paginate({ coursesPerPage, allCourses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="btnPag">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
    </nav>
  );
}
