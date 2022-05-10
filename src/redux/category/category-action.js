
import categoryActionType from './category-types';
import axios from 'axios'
export const getAllCategories = (limit) =>  async dispatch => {
    await axios.get(`http://localhost:8000/api/getCategories?limit=${limit}`)
    .then(res=>{
        dispatch({
            type:categoryActionType.GET_ALL_CATEGORY,
            payload: res.data.categories
        })
    })
}