const Order = require('../../models/Order');
const Courses = require('../../models/Course');
const User = require('../../models/User');
const mercadopago = require('mercadopago');  // SDK MP
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

// configure: método de mp
// Agrego mis credenciales
mercadopago.configure({
    access_token: 'TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715'
});

module.exports = async (req, res, rext) => {
    console.log("ENTRO A PAYMENT");

    console.log("REQUEST", req);

    const { 
        payment_id, 
        status,
        external_reference,
        merchant_order_id
        } = req.query;
    
    try {
        if(status === "approved") {
            const ordenSuccess = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
                {
                    payment: "Confirmed"
                }, 
                {
                    payment_id:payment_id
                }
            );
            ordenSuccess = await Courses.populate(orderSuccess, {path: "courses"});
            ordenSuccess = await User.populate(orderSuccess, {path: "user"})
            res.json(ordenSuccess);
        } else if(status === "failure") {
            const ordenFailure = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
                {
                    payment: "Canceled"
                }, 
                {
                    payment_id:payment_id
                }
            );
            ordenFailure = await Courses.populate(ordenFailure, {path: "courses"});
            ordenFailure = await User.populate(ordenFailure, {path: "user"})
            res.json(ordenFailure);
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
};