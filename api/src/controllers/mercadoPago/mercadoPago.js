const Order = require("../../models/Order");
const Course = require("../../models/Course");
const mercadopago = require("mercadopago"); // SDK MP


mercadopago.configure({
  access_token:
    "TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715",
});

module.exports = async (req, res, next) => {

  const { id } = req.params;

  try {
    let order = await Order.findOne({ _id: id });

    order = await Course.populate(order, { path: "courses" });

    const items_ml = order.courses.map((c) => ({
      title: c.title,
      unit_price: c.price,
      quantity: 1
    }));

    let preference = {
      items: items_ml, 
      external_reference: id, 
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "atm",
          },
        ],
        excluded_payment_types: [
          {
            id: "ticket",
          },
        ],
        installments: 1,
      },
      binary_mode: true, 
      back_urls: {
        success: `http://localhost:9000/mercadopago/pagos/${id}`,
        failure: `http://localhost:9000/mercadopago/pagos/${id}`,
      },
      auto_return: "approved", 
    };

    mercadopago.preferences.create(preference)
      .then((response) => {

        global.id = response.body.id;

        res.json(response.body.init_point);
      
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
