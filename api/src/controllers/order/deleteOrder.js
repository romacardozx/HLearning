const Order = require('../../models/Order');

module.exports = async (req, res, next) => {

    const { id } = req.params;

    try {
        let order = await Order.findOneAndUpdate({_id:id}, {status: "Deleted"})
        if(order) {
            res.json({msg: 'Order deleted'});
        } else {
            res.json({msg: "The order that you're trying to delete doesn't exist"})
        }
    } catch(err) {
        next(err);
    }
}