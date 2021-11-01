import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../actions/getAllCategories";

export default function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.getAllCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(getAllCategories(e.target.value));
  }

  return (
    <div>
      <span className="span">Filtro por Categoría</span>
      <select onChange={(e) => handleSelectCategories(e)}>
        <option value="default">All</option>
        {categories.map((d) => (
          <option value={d.name} key={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
}
