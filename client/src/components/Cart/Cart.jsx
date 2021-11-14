import React, { useState } from 'react';
import { loadState, removeState } from '../../localStorage'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/NavBar';
import Card from '../Card/Card.jsx'
import { Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Cart() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
    }));

    const [, setRemove] = useState();
    const cart = loadState();
    cart.shift();
    console.log(cart, "Componente cart")

    return (
        <div>
            <Navbar/>
            {
                cart.length > 0 ? 
                <div>
                    <Grid container align="center">
                    {
                        cart?.map(c => {

                            const course = JSON.parse(c) 

                            return (
                                <div  key={course._id}>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Item sx={{ minWidth: 270, maxWidth: 280 }}>
                                        <Card
                                            id={course._id}
                                            title={course.title}
                                            image={course.img}
                                            description={course.description}
                                            score={course.score}
                                            price={course.price}
                                            course={course}
                                        />
                                        <button
                                            onClick={()=> {
                                                removeState(course);
                                                loadState();
                                                setRemove("eliminado del carrito");
                                                alert("Eliminado");   
                                            }}
                                        >X</button>
                                    </Item>
                                </Grid> 
                            </div>
                        )})
                    }
                    </Grid>
                </div> 
                : <h1>Empty Cart</h1>
            }
            <Footer/>
        </div>
    )
}

export default Cart;