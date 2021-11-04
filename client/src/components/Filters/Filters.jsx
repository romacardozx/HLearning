import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import {filterByCategories} from "../../redux/actions/filterByCategories";
import { filterRangeByPrice } from "../../redux/actions/filterRangeByPrice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.getCategories.getAllCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  }

  function handlePriceByRange(e) {
    e.preventDefault();
    dispatch(filterRangeByPrice(e.target.value));
  }

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Box sx={{ minWidth: 130 }}>
          <FormControl fullWidth>
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
          <FormControl fullWidth>
            <InputLabel id="simple-select-price">Precio</InputLabel>
            <Select
              labelId="simple-select-price"
              id="select"
              label="Price"
              onChange={(e) => handlePriceByRange(e)}
            >
              <MenuItem value={300}>$1 - $500</MenuItem>
              <MenuItem value={900}>$500 - $1500</MenuItem>
              <MenuItem value={1800}>$1500 - $2500</MenuItem>
              <MenuItem value={2550}>+ $2500</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      {/* <span className="span">Filtro por Categoría</span>
      <select
        defaultValue="default"
        onChange={(e) => handleSelectCategories(e)}
      >
        <option value="default" disabled="disabled">
          Categorías
        </option>
        {categories.map((c) => (
          <option value={c._id} key={c._id}>
            {c.name}
          </option>
        ))}
      </select>
      <span className="span">Filtro por Precio</span>
      <select defaultValue="default" onChange={(e) => handlePriceByRange(e)}>
        <option value="default" disabled="disabled">
          Precio
        </option>
        <option value="300">$1 - $500</option>
        <option value="900">$500 - $1500</option>
        <option value="1800">$1500 - $2500</option>
        <option value="2550">+ $2500</option>
      </select>
      <select defaultValue="default" onChange={(e) => handleSelectPrice(e)}>
        <option value="default" disabled="disabled">
          Rango de precio
        </option>
        <option value="Asc">+ $</option>
        <option value="Desc">- $</option>
      </select> */}
    </div>
  );
}

// 1 - 500 / 500 - 1500 / 1500 - 2500 / +2500
