export const removeProduct = (carts, removedProduct) =>{
   
   
    const exisiting = carts.find(item=>{
        if(item._id === removedProduct._id && item.selectedColor === removedProduct.selectedColor){
            return item
        }
    })

    if(exisiting.quantity === 1){
        carts = carts.filter(item=>item.selectedColor !== removedProduct.selectedColor ?? item._id !== removedProduct._id)
    }       
    else{
        return carts.map(item=>{
            return item._id === removedProduct._id && item.selectedColor === removedProduct.selectedColor ? {...item, quantity:item.quantity-1} : item
    
        })
    }
    return [...carts]
}






export const addProduct = (carts, addedProduct) =>{
    const exisiting  = carts.find(item=>item._id === addedProduct._id && item.selectedColor === addedProduct.selectedColor)
    
       if(exisiting){
            return carts.map(item=>{
                return item._id === addedProduct._id && item.selectedColor === addedProduct.selectedColor ? {...item,quantity:item.quantity+1 , quantityProduct:item.quantity*5} : item;
            })
     
       }
       else{
            return [...carts, {...addedProduct, quantity:1 }]
       }
   
}