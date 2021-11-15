// const Order = require('../../models/Order');
// const Course = require('../../models/Course');
// const User = require('../../models/User');
// const mercadopago = require('mercadopago');  // SDK MP
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV || "production"}`,
// });

// // console.log("El access tokennn", process.env.ACCESS_TOKEN);
// // console.log("El portttt", process.env.PORT);

// // configure: método de mp
// // Agrego mis credenciales
// mercadopago.configure({
//     access_token: 'TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715'
// });

// module.exports = async (req, res, next) => {
//     // console.log("ENTRO A MP")
    
//     const { id } = req.params;
//     // console.log(id)
//     try {
//       let order = await Order.findOne({_id:id});
//       order = await Course.populate(order, {path: "courses"});
//       order = await User.populate(order, {path: "user"})
//       console.log(order)
//       // console.log(order)
//       // if(!order) {
//       //   res.json({
//       //     msg: "No existe la orden"
//       //   })
//       // }
      
//       const items_ml = order.courses.map(c=> ({
//         title: c.title,   // Titulo del producto
//         unit_price: c.price, // ????? Precio? El curso tiene un precio distinto, tiene que ser el precio de la orden
//         quantity: 1, // No vendemos por stock
//       }))

//       let preference = {
//         items: items_ml,  // Los items a comprar
//         external_reference: id, // El id de la orden
//         payment_methods: {
//           exluded_payment_types: [
//             {
//               id: 'atm',  // Se excluye el método de pago por cajero automático
//             }
//           ],
//           installments: 1  // Solo se puede abonar en 1 pago (1 cuota)
//         },
//         back_urls: {
//           success: 'http://localhost:9000/mercadopago/payment',
//           failure: 'http://localhost:3000',
//           pending: 'http://localhost:9000/mercadopago/payment'
//         }
//       }

//       // Respuesta de la creacion de la preferencia (Esto me devuelve un id)
//       mercadopago.preferences.create(preference)
//         .then(response => {
//           global.id = response.body.id

//           res.json({
//             id: global.id
//           })
//         })
//         .catch(function(err) {
//           console.log(err)
//         })
//       // res.json(order)
//     } catch(err) {
//       console.log(err);
//       next(err)
//     }
// }






