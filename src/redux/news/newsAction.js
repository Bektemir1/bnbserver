import newsActionType from "./newsActionType"
import axios from 'axios'
export const getNews = () => async dispatch =>{
    await axios.get(`http://localhost:8000/api/getNews`)
    .then(res=>{
        console.log(res,'Bektemir')
        dispatch({
            type:newsActionType.GET_NEWS,
            payload: res.data.news
        })
    })
    
 }