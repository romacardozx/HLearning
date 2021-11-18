const Order = require('../../models/Order');
const Courses = require('../../models/Course');
const User = require('../../models/User');
const mercadopago = require('mercadopago');  // SDK MP

// configure: método de mp
// Agrego mis credenciales
mercadopago.configure({
    access_token: 'TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715'
});

module.exports = async (req, res, next) => {
    // console.log("ENTRO A PAYMENT");

    //console.log("REQUEST", req);

    const { 
        payment_id, 
        status,
        external_reference,
        merchant_order_id
        } = req.query;
    
    // console.log("PAYMENT ID", payment_id);
    // console.log("STATUS", status);
    // console.log("ORDER ID", external_reference);
    // console.log("MERCHANT", merchant_order_id);

    try {
        if(status === "approved") {
            let ordenSuccess = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
                {
                    payment: "Confirmed",
                    paymentId: payment_id
                }
            );
            // ordenSuccess = await Courses.populate(ordenSuccess, {path: "courses"});
            // ordenSuccess = await User.populate(ordenSuccess, {path: "user"})
            try {
                let ordenModified = await Order.findById({_id: external_reference, payment: "Confirmed"});
                ordenModified = await Courses.populate(ordenModified, {path: "courses"});
                ordenModified = await User.populate(ordenModified, {path: "user"});
                res.json(ordenModified)
            } catch(err) {
                console.log(err);
                next(err);
            }
        } else {
            try {
            let ordenFailure = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
            );
            ordenFailure = await Courses.populate(ordenFailure, {path: "courses"});
            ordenFailure = await User.populate(ordenFailure, {path: "user"})
            res.json(ordenFailure);
            } catch(err) {
                console.log(err);
                next(err);
            }
        }
        } catch(err) {
        console.log(err);
        next(err);
    }
};