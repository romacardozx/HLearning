import React from "react";
import { getCourseByName } from "../../actions/getCourseByName";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
/* import style from "./SearchBar.module.css"; */

export default function SearchBar() {
  /* const [input, setInput] = useState(""); */

  /* const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }; */

  return (
    <div>
      <form /* onSubmit={handleSubmit} */>
        <Stack direction="row" spacing={0.5}>
          <TextField
            id="outlined-basic"
            label="Buscar"
            variant="outlined"
            name="curso"
            type="text"
            placeholder="Curso..."
            /* onChange={handleInputChange}
            value={input} */
          />
          <Button variant="contained" type="submit">
            <SearchIcon />
          </Button>
        </Stack>
      </form>
    </div>
  );
}
