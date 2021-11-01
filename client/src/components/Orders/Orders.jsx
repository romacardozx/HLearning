import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Orders() {
  const [name, setName] = React.useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const [score, setScore] = React.useState("");

  const handleChangeScore = (e) => {
    setScore(e.target.value);
  };

  const [price, setPrice] = React.useState("");

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-name">Nombre</InputLabel>
          <Select
            labelId="select-name"
            id="select-name"
            value={name}
            label="Name"
            onChange={handleChangeName}
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
            value={score}
            label="Score"
            onChange={handleChangeScore}
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
            value={price}
            label="Price"
            onChange={handleChangePrice}
          >
            <MenuItem value="Asc">Mayor precio</MenuItem>
            <MenuItem value="Desc">Menor precio</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
