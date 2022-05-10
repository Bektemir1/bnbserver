export const updateProduct = (products,updatedProduct) =>{

    return   products.map(item=>{
         if(item._id === updatedProduct._id){
            return {...item, saved: updatedProduct.saved}
         }
         return item
      })
   
   
}
