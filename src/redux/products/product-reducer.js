import productActionType from "./product-type";
import { updateProduct } from "./product-utils";
const INITIAL_STATE = {
    products:[],
    search:""
}

const productReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case productActionType.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload  
            }
        case productActionType.UPDATE_PRODUCT:
            return {
                ...state,
                products:updateProduct(state.products,action.payload),
             
               
               
               
            }
        case productActionType.SEARCH_PRODUCT:
            return{
                ...state,
                search:action.payload
            }
        default:
            return state;
    }
}
export default productReducer;