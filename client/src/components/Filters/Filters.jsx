import React from "react";
import { useDispatch } from "react-redux";
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

export default function Filters(params) {
  const dispatch = useDispatch();
  function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  }

  function handleSelectDuration(e) {
    e.preventDefault();
    dispatch(filterByDuration(e.target.value));
  }
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
  const optionsCat = [
    "FrontEnd",
    "Css",
    "UI",
    "LenguajeDeProgramacion",
    "HTML",
    "Diseño Web",
    "BackEnd",
  ];

  const optionsDur = ["1-5 horas", "5-10 horas", "+10 horas"];

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
