import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import { filterByCategories } from "../../redux/actions/filterByCategories";
import { filterRangeByPrice } from "../../redux/actions/filterRangeByPrice";
/* import { getAllCourses } from "../../redux/actions/getAllCourses"; */
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.getCategories.getAllCategories
  );
  /* const allCourses = useSelector((state) => state.getCourses.getAllCourses); */

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSelectCategories(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByCategories(e.target.value));
  }

  function handlePriceByRange(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterRangeByPrice(e.target.value));
  }

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Box sx={{ minWidth: 130 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="simple-select-name">Categorías</InputLabel>
            <Select
              labelId="simple-select-name"
              id="select"
              label="Categories"
              onChange={(e) => handleSelectCategories(e)}
            >
              {categories.map((c) => (
                <MenuItem value={c._id} key={c._id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="simple-select-price">Precio</InputLabel>
            <Select
              labelId="simple-select-price"
              id="select"
              label="Price"
              onChange={(e) => handlePriceByRange(e)}
            >
              <MenuItem value={300}>$1000 - $1500</MenuItem>
              <MenuItem value={900}>$1500 - $2000</MenuItem>
              <MenuItem value={1800}>$2000 - $2500</MenuItem>
              <MenuItem value={2550}>+ $2500</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </div>
  );
}
