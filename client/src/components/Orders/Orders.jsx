import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../actions/orderByName";
import { orderByScore } from "../../actions/orderByScore";
import { orderByPrice } from "../../actions/orderByPrice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Orders({ setCurrentPage }) {
  const dispatch = useDispatch();

  const [orderName, setOrderName] = useState("");
  const [orderScore, setOrderScore] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  console.log(orderName);
  console.log(orderScore);
  console.log(orderPrice);

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
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box sx={{ minWidth: 110 }}>
          <FormControl fullWidth>
            <InputLabel id="select-name">Nombre</InputLabel>
            <Select
              labelId="select-name"
              id="select-name"
              label="Name"
              placeholder="Nombre"
              onChange={(e) => handleChangeName(e)}
            >
              <MenuItem value="A-Z">A-Z</MenuItem>
              <MenuItem value="Z-A">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel id="select-score">Popularidad</InputLabel>
            <Select
              labelId="select-score"
              id="select-score"
              label="Score"
              onChange={(e) => handleChangeScore(e)}
            >
              <MenuItem value="Asc">Mayor popularidad</MenuItem>
              <MenuItem value="Desc">Menor popularidad</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="select-price">Precio</InputLabel>
            <Select
              labelId="select-price"
              id="select-price"
              label="Price"
              onChange={(e) => handleChangePrice(e)}
            >
              <MenuItem value="Asc">Mayor precio</MenuItem>
              <MenuItem value="Desc">Menor precio</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      {/* <span>Ordenar por Nombre</span>
      <select defaultValue="default" onChange={(e) => handleChangeName(e)}>
        <option value="default" disabled="disabled">
          Todos
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <span className="span">Ordenar por Popularidad</span>
      <select defaultValue="default" onChange={(s) => handleChangeScore(s)}>
        <option value="All" disabled="disabled">
          Todos
        </option>
        <option value="Asc">Mayor popularidad</option>
        <option value="Desc">Menor popularidad</option>
      </select>
      <span className="span">Ordenar por Precio</span>
      <select defaultValue="default" onChange={(s) => handleChangePrice(s)}>
        <option value="All" disabled="disabled">
          Todos
        </option>
        <option value="Asc">Mayor precio</option>
        <option value="Desc">Menor precio</option>
      </select> */}
    </div>
  );
}
