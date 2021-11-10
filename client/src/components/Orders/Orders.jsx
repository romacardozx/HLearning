import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions/orderByName";
import { orderByScore } from "../../redux/actions/orderByScore";
import { orderByPrice } from "../../redux/actions/orderByPrice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Orders({ setCurrentPage, filtered }) {
  const dispatch = useDispatch();

  const [orderName, setOrderName] = useState("");
  const [orderScore, setOrderScore] = useState("");
  const [orderPrice, setOrderPrice] = useState("");

  function handleChangeName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value, filtered));
    setCurrentPage(1);
    setOrderName(e.target.value);
  }

  const handleChangeScore = (e) => {
    e.preventDefault();
    dispatch(orderByScore(e.target.value, filtered));
    setCurrentPage(1);
    setOrderScore(e.target.value);
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value, filtered));
    setCurrentPage(1);
    setOrderPrice(e.target.value);
  };

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Box sx={{ minWidth: 110 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="select-name">Nombre</InputLabel>
            <Select
              labelId="select-name"
              id="select-name"
              label="Name"
              placeholder="Nombre"
              onChange={(e) => handleChangeName(e)}
              value={orderName}
            >
              <MenuItem value="A-Z">A-Z</MenuItem>
              <MenuItem value="Z-A">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="select-score">Popularidad</InputLabel>
            <Select
              labelId="select-score"
              id="select-score"
              label="Score"
              onChange={(e) => handleChangeScore(e)}
              value={orderScore}
            >
              <MenuItem value="Asc">Mayor popularidad</MenuItem>
              <MenuItem value="Desc">Menor popularidad</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="select-price">Precio</InputLabel>
            <Select
              labelId="select-price"
              id="select-price"
              label="Price"
              onChange={(e) => handleChangePrice(e)}
              value={orderPrice}
            >
              <MenuItem value="Asc">Mayor precio</MenuItem>
              <MenuItem value="Desc">Menor precio</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </div>
  );
}
