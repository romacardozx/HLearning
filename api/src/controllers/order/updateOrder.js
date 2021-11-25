const Order = require('../../models/Order');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const newDataOrder = req.body;
    try {
        const order = await Order.findOneAndUpdate({_id: id},
            newDataOrder, {
                new:true
            });
        if(order) {
            res.json(order)
        } else {
            res.json({msg: "The order that you're trying to edit doesn't exist"})
        }
    } catch(err) {
        next(err)
    }
}