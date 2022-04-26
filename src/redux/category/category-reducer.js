
import categoryActionType from './category-types'
const INITIAL_STATE = {
    categories:[]
}


const categoryReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case categoryActionType.GET_ALL_CATEGORY:
            return{
                ...state,
                categories: action.payload  
            }
            default:
                return state;
    }
}
export default categoryReducer;