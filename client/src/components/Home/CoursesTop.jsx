import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Loading from "../Loading/Loading";
import { filterByStars } from "../../redux/actions/filterByStars";
import Card from "../Card/Card";


export default function CoursesTop() {
  const dispatch = useDispatch();
  const coursesTop = useSelector((state) => state.getCourses.setAllCourses);
  const fourCourses = coursesTop?.slice(1, 5);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  }));

  useEffect(() => {
    dispatch(filterByStars(5));    
  }, [dispatch]);

  return (
    <div className="container-slider">
      <br />
      <Grid container align="center">
        {fourCourses?.length >= 0 ? (
          <>
            {fourCourses?.map((c, i) => (
              <Grid key={i} item xs={12} sm={6} md={3} lg={3}>
                <Item sx={{ minWidth: 270, maxWidth: 280 }}>
                  <Card
                    id={c._id}
                    title={c.title}
                    image={c.img}
                    description={c.description}
                    score={c.score}
                    price={c.price}
                    course={c}
                  />
                </Item>
              </Grid>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </Grid>
      <br />
    </div>
  );
}
