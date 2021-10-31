import React from "react";
/* import { useDispatch } from "react-redux";
import { orderByName } from "../../actions/orderByName";
import { orderByScore } from "../../actions/orderByScore";
import { orderByPrice } from "../../actions/orderByPrice"; */
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Orders({
  setCurrentPage,
  setOrderName,
  setOrderScore,
  setOrderPrice,
}) {
  /*  const dispatch = useDispatch();

  function handleChangeName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrderName("Order" + e.target.value);
  }

  const handleChangeScore = (e) => {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrderScore("Order" + e.target.value);
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrderPrice("Order" + e.target.value);
  }; */

  return (
    <div>
      <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-name">Nombre</InputLabel>
          <Select
            labelId="select-name"
            id="select-name"
            label="Name"
            /* onChange={(e) => handleChangeName(e)} */
          >
            <MenuItem value="A-Z">A-Z</MenuItem>
            <MenuItem value="Z-A">Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Box sx={{ maxWidth: 180 }}>
        <FormControl fullWidth>
          <InputLabel id="select-score">Popularidad</InputLabel>
          <Select
            labelId="select-score"
            id="select-score"
            label="Score"
            /* onChange={(e) => handleChangeScore(e)} */
          >
            <MenuItem value="Asc">Mayor popularidad</MenuItem>
            <MenuItem value="Desc">Menor popularidad</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Box sx={{ maxWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="select-price">Precio</InputLabel>
          <Select
            labelId="select-price"
            id="select-price"
            label="Price"
            /* onChange={(e) => handleChangePrice(e)} */
          >
            <MenuItem value="Asc">Mayor precio</MenuItem>
            <MenuItem value="Desc">Menor precio</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
