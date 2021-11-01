import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../actions/getAllCategories";
import filterByCategories from "../../actions/filterByCategories";
import filterByDuration from "../../actions/filterByDuration";
/* import { Checkbox, Collapse } from "antd"; */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
/* const { Panel } = Collapse; */

export default function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.getAllCategories);

  function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  }

  function handleSelectDuration(e) {
    e.preventDefault();
    dispatch(filterByDuration(e.target.value));
  }

  // Our sample dropdown options
  const optionsCat = categories.map((c) => c.name);
  /* ["FrontEnd", "Css", "UI", "LenguajeDeProgramacion", "HTML", "Diseño Web", "BackEnd",] */
  console.log("CATEGORIAS:", optionsCat);

  const optionsDur = ["1-5 horas", "5-10 horas", "+10 horas"];
  const handleClickCheckbox = function name(e) {};

  return (
    <div style={{ marginLeft: "0", marginTop: "0" }}>
      {/* <h3>Filtrar por:</h3> */}
      <Autocomplete
        multiple
        id="checkboxes-tags"
        options={optionsCat}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              onChange={(e) => handleClickCheckbox(e)}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Categorías"
            placeholder="Favorites"
          />
        )}
      />
      <br />
      <Autocomplete
        multiple
        id="checkboxes-tags"
        options={optionsDur}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Duración"
            placeholder="Duración"
          />
        )}
      />
    </div>
  );
}
