export const sumPricesCourses = (arrayCourses) => {
   let totalPrice = 0

   arrayCourses?.map((c) =>{
       totalPrice = totalPrice + c.price
   })

   return totalPrice
}