const Order = require('../../models/Order');
const Cart = require('../../models/Cart');
const User = require('../../models/User');
const mercadopago = require('mercadopago');
require("dotenv").config();
const { MP_TOKEN,CLIENT_URL } = process.env;

mercadopago.configure({
    access_token: MP_TOKEN
});

module.exports = async (req, res, next) => {

    const { 
        payment_id, 
        status,
        external_reference,
        } = req.query;

    try {
        let order = await Order.findById({_id: external_reference});

        if(status === "approved")
            order = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
                {
                    payment: "Confirmed",
                    paymentId: payment_id
                }
            );
            try {
                let ordenModified = await Order.findById({_id: external_reference, payment: "Confirmed"});

                let userCourses = await User.findOne({_id: ordenModified.user._id})
                
                userCourses.courses = userCourses.courses.concat(ordenModified.courses);
                await userCourses.save();
                
                await Cart.findOneAndUpdate({user: ordenModified.user._id}, {
                    courses: []
                })
                res.redirect(`${CLIENT_URL}/orders/${external_reference}`);
            } catch(err) {
                next(err);
            }
        } catch(err) {
            next(err);
        }
};