import React, { useState } from 'react';
import { loadState, removeState } from '../../localStorage'
import Card from '../Card/Card.jsx'
import { Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Cart() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
    }));

    const cart = loadState();
    cart.shift();
    const [, setRemove] = useState();
    console.log(cart, "cart")

    return (
        <div>
            {
                cart.length > 0 ? 
                <div>
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
                </div> 
                : <h1>Empty Cart</h1>
            }
        </div>
    )
}

export default Cart;