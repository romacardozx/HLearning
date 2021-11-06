import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesScore } from "../../redux/actions/getCoursesScore";
import Card from "../Card/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function CoursesTop() {
  const dispatch = useDispatch();

  const coursesTop = useSelector((state) => state.getCourses.setAllCourses);
  const fourCourses = coursesTop.slice(1, 5);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  }));

  useEffect(() => {
    dispatch(getCoursesScore(5));
  }, [dispatch]);

  return (
    <div className="container-slider">
      <Grid container>
        {fourCourses.length >= 0 ? (
          <>
            {fourCourses?.map((c, i) => (
              <div key={i}>
                <Grid item xs={2} sm={4} md={4}>
                  <Item sx={{ minWidth: 270 }}>
                    <Card
                      id={c._id}
                      title={c.title}
                      image={c.img}
                      description={c.description}
                      score={c.score}
                      price={c.price}
                    />
                  </Item>
                </Grid>
              </div>
            ))}
          </>
        ) : (
          <Typography>Cargando</Typography>
        )}
      </Grid>
    </div>
  );
}
