import React,{useEffect} from 'react';
import './News.css';
import { useSelector,useDispatch } from 'react-redux';

import { getNews } from '../../redux/news/newsAction';


const News = ({history}) => {
    const dispatch = useDispatch();
   useEffect(()=>{

    dispatch(getNews())
   },[])

   const news = useSelector(state=>state.news.news)
    return(
        <div className='news pb-5'>
            <div className='component-path d-flex align-items-center'> 
                <div className="container "> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}> Новости</span></div>
            </div>
            <div className="container">
                <h2 className='title-parent'>Новости</h2>
               
               {
                   news.map((item)=>{
                       return(
                        <div key={item._id} className="news-box">
                            <img className='news-img' alt="" src={'http://localhost:8000/images/'+item.img}/>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p> 
                            </div>

                    </div>
                       )
                   })
               }

                
            </div>
        </div>
    )
}
export default News;