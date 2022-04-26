export const updateProduct = (products,updatedProduct) =>{
   products = products.filter(item=>item._id !== updatedProduct._id);
   return products;
}