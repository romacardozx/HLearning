const Order = require('../../models/Order');
const Course = require('../../models/Course');
const User = require('../../models/User');
const mercadopago = require('mercadopago');  // SDK MP

// console.log("El access tokennn", process.env.ACCESS_TOKEN);
// console.log("El portttt", process.env.PORT);

// configure: método de mp
// Agrego mis credenciales
mercadopago.configure({
    access_token: 'TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715'
});

module.exports = async (req, res, next) => {
    // console.log("ENTRO A MP")
    const { id } = req.params;
    // console.log(id)
    try {
      let order = await Order.findOne({_id:id});
      //   console.log("LA ORDEN SIN POPULATE", order);
      order = await Course.populate(order, {path: "courses"});
      //  console.log("LA ORDEN CON EL CURSO POPULADO", order);
      order = await User.populate(order, {path: "user"});
      //   console.log("LA ORDEN CON EL USUARIO POPULADO", order);
      //   console.log(order)
      // if(!order) {
      //   res.json({
      //     msg: "No existe la orden"
      //   })
      // }
      
      const items_ml = order.courses.map(c=> ({
        title: c.title,   // Titulo del producto
        unit_price: c.price, // ????? Precio? El curso tiene un precio distinto, tiene que ser el precio de la orden
        quantity: 1, // No vendemos por stock
      }))

      let preference = {
        items: items_ml,  // Los items a comprar
        external_reference: id, // El id de la orden
        payment_methods: {
          excluded_payment_methods: [
            {
              id: "atm"
            }
          ],
          excluded_payment_types: [
            {
              id: "ticket"
            }
          ],
          installments: 1,  // Solo se puede abonar en 1 pago (1 cuota)
        },
        binary_mode: true,
        back_urls: {
          success: `http://localhost:3000/home`,
          failure: `http://localhost:9000/mercadopago/pagos/${id}`,
        },
        auto_return: "approved"  // Para compras success, mercado pago redirije automáticamente al back_url de success, sin mostrar el botón, de forma automática
      }

      //   console.log("LA PREFERENCIA", preference)
      // Respuesta de la creacion de la preferencia (Esto me devuelve un id)
      mercadopago.preferences.create(preference)
        .then(response => {
          global.id = response.body.id

        // console.log(response)
        //   console.log(response.body.payment_methods.exluded_payment_methods)
        //   console.log(response.body.payment_methods.exluded_payment_types)
          res.json(response.body.init_point)
        })
        .catch(function(err) {
          console.log(err)
        })
      // res.json(order)
    } catch(err) {
      console.log(err);
      next(err)
    }
}