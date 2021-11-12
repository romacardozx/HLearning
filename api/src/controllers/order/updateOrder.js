const Order = require('../../models/Order');

//PROBADA POR POSTMAN Y ANDANDO OK(YAMILA)
//Esta ruta recibe un id por params y un objeto por body para reempazar en los datos que estaban(deben mandar un objeto con todosss los datos completos).
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
        console.log(err);
        next(err)
    }
}