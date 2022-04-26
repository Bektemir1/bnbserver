import productActionType from "./product-type";

export const getAllProducts = (item) =>({
    type: productActionType.GET_PRODUCTS,
    payload:item
}) 
export const updateProduct = (item) =>({
    type:productActionType.UPDATE_PRODUCT,
    payload:item
})