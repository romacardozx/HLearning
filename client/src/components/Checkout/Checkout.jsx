import { useEffect} from 'react'

export default function Checkout({ productos, data }){
 useEffect(()=>{
  const script = document.createElement('script');
  const attr_data_preference = document.createAttribute('data-preference-id')

  attr_data_preference.value = data.id 

  script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  script.setAttributeNode(attr_data_preference)

  document.getElementById('form1').appendChild(script)
  return () =>{
    document.getElementById('form1').removeChild(script);
  }
 },[data])
    return(
        <div>

  <form id='form1'>

        <h4>Listado de Compras</h4>
        <ul>
        {productos.map((producto, i) => {
            return(
              
                <li key={i}>{producto.title} - {producto.price} - {producto.quantity}</li>   
                  
            )
        })} </ul>  
        
      </form>

     </div>
    )
}