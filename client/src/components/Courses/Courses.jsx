import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { getAllCurses } from ".../actions/getAllCurses"; */
import { Link } from "react-router-dom";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses);
}
