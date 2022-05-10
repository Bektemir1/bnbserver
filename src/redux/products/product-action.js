import productActionType from "./product-type";
import axios from 'axios';
export const getAllProducts = () => async dispatch =>{
   await axios.get(`http://localhost:8000/api/getProducts`)
   .then(res=>{
       dispatch({
           type:productActionType.GET_PRODUCTS,
           payload: res.data.products
       })
   })
   
}

export const updateProduct = (item) =>({
    type:productActionType.UPDATE_PRODUCT,
    payload:item
})


export const searchProduct = item =>({
    type:productActionType.SEARCH_PRODUCT,
    payload:item
})