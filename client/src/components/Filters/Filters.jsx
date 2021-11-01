import React from "react";
/* import { useDispatch } from "react-redux";
import { filterByCategories } from "../../actions/filterByCategories";
import { filterByDuration } from "../../actions/filterByDuration"; */
/* import { Checkbox, Collapse } from "antd"; */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
/* const { Panel } = Collapse; */

export default function Filters(params) {
  /*  const dispatch = useDispatch();
    function handleSelectCategories(e) {
        e.preventDefault();
        dispatch(filterByCategories(e.target.value));
  }

  function handleSelectDuration(e) {
    e.preventDefault();
    dispatch(filterByDuration(e.target.value));
  } */
  /* return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header key="1">
          <React.Fragment>
            <Checkbox onChange type="checkbox" checked />
            <span>Categoria A</span>
          </React.Fragment>
        </Panel>
      </Collapse>
    </div>
  ); */

  // Our sample dropdown options
  const options = [
    "FrontEnd",
    "Css",
    "UI",
    "LenguajeDeProgramacion",
    "HTML",
    "Diseño Web",
    "BackEnd",
  ];

  return (
    <div style={{ marginLeft: "0", marginTop: "0" }}>
      <h3>Filtrar por:</h3>
      <Autocomplete
        multiple
        id="checkboxes-tags"
        options={options}
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
            label="Categoría"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}
