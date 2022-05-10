import newsActionType from "./newsActionType";

const INITIAL_STATE = {
    news:[]
}

export const newsReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case newsActionType.GET_NEWS:
            return{
                state,
                news: action.payload
            }
        default:
            return state
    }
}