import cartActionType from './cart-types'
import { removeProduct , addProduct} from './cart-utils'
const INITIAL_STATE = {
    carts: []
}
// [...state.carts,action.payload]
const cartReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case cartActionType.ADD_CART:
            return{
                ...state,
                carts: addProduct(state.carts,action.payload)
            }
        case cartActionType.REMOVE_CART:
            return{
                ...state,
                carts: removeProduct(state.carts,action.payload)
            }
        case cartActionType.CLEAR_CART:
            return{
                state,
                carts: action.payload
            }
        default:
            return state;
    }
}
export default cartReducer;