import React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
/* import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system"; */

/* import styles from "./Paginate.module.css"; */

export default function Paginate({ coursesPerPage, allCourses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab label="1" />
        <Tab label="2" />
        <Tab label="3" />
        <Tab label="4" />
        <Tab label="5" />
        <Tab label="6" />
        <Tab label="7" />
      </Tabs>
    </Box>
    /* <nav className="btnPag">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </nav> */
  );
}
