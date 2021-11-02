import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../actions/getAllCategories";
import filterByCategories from "../../actions/filterByCategories";
import { orderByPrice } from "../../actions/orderByPrice";
import { filterRangeByPrice } from "../../actions/filterRangeByPrice";

export default function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.getAllCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  }

  function handleSelectPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
  }

  function handlePriceByRange(e) {
    e.preventDefault();
    dispatch(filterRangeByPrice(e.target.value));
  }

  return (
    <div>
      <span className="span">Filtro por Categoría</span>
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
      </select>
    </div>
  );
}

// 1 - 500 / 500 - 1500 / 1500 - 2500 / +2500
