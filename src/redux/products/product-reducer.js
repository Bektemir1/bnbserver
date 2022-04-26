import productActionType from "./product-type";
const INITIAL_STATE = {
    products:[]
}


const productReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case productActionType.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload  
            }
        case productActionType.UPDATE_PRODUCT:
            console.log('product reducer')
            return {
                ...state,
                products: state.products.map(item=>{
                    if(item._id === action.payload._id){
                        return {...item, saved: action.payload.saved}
                    }
                    return item
                })
            }
        default:
            return state;
    }
}
export default productReducer;