/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fusionCart } from "../../redux/actions/fusionCart";
import { actualizeCart } from "../../redux/actions/actualizeCart";
import { loadState, removeState } from "../../localStorage";
import { Button, Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card.jsx";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import createOrder from "../../redux/actions/createOrder";
import Swal from "sweetalert2";
import MercadoPago from "../../redux/actions/MercadoPago";

function auth(authentification, cartAll) {
  let cartStorage = loadState();
if (authentification) {
    let cart = cartAll;
    return cart;
  } else {
    let cart = cartStorage;
    return cart;
  }
}

function Cart() {
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  }));

  const [remove, setRemove] = useState(false);

  useEffect(() => {

    if (userDetail._id) dispatch(fusionCart(userDetail._id));

  }, [dispatch, auth]);

  let cartAll = useSelector((state) => state.cartReducer.allCart);
  let authentification = useSelector(
    (state) => state.userReducer.isAuthenticated
  );
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const cart = auth(authentification, cartAll);
  console.log("CART", cart);

  let price = [];
  cart.map((c) => {
    return price.push(c.price);
  });
  let price2 = price.reduce((a, b) => a + b, 0);

  const handleCreateorder = async () => {
    Object.keys(userDetail).length > 0
      ? dispatch(
          createOrder({ user: userDetail._id, courses: cartAll, price: price2 })
        )
      : window.location.replace("/login");
  };
  const order = useSelector((state) => state.getOrder.orderCreated);

  order &&
    Swal.fire({
      title: `Quieres abonar tu orden de $ ${price2} en nuestra plataforma de pago?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(MercadoPago(order._id));
      }
    });

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Paper elevation={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                m: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {cart.length > 0 ? (
                  <Grid container direction="column" justifyContent="center">
                    {cart.map((course) => {
                      return (
                        <div key={course._id}>
                          <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Item sx={{ minWidth: 500 }}>
                              <Card
                                id={course._id}
                                title={course.title}
                                image={course.img}
                                description={course.description}
                                score={course.score}
                                price={course.price}
                                course={course}
                              />
                              {authentification ? (
                                <IconButton
                                  color="secondary"
                                    onClick={() => {
                                      dispatch(
                                        actualizeCart(
                                          cart,
                                          course._id,
                                          userDetail._id
                                        )
                                      );
                                    }}  >
                                  <DeleteForeverIcon/>
                                </IconButton>
                              ) : (
                                <IconButton
                                  onClick={() => {
                                    removeState(course);
                                    setRemove(!remove);
                                  }}
                                >
                                  <DeleteForeverIcon color="secondary" />
                                </IconButton>
                              )}
                            </Item>
                          </Grid>
                        </div>
                      );
                    })}
                  </Grid>
                ) : (
                  <h1>Empty Cart</h1>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: 450,
                }}
              >
                <Typography
                  textAlign="center"
                  variant="h5"
                  color="text.primary"
                >
                  <b>Total: {price2}</b>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCreateorder}
                >
                  Ordena tus Cursos
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer/>
    </div>
  );
}

export default Cart;
