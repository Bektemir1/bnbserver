import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/category/category-action';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collections.css'

const Collections = ({history}) =>{
    const categories = useSelector(state=>state.category.categories)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCategories())
      

       
   },[])

        return(
           <div className="collections pb-5">
                <div className='component-path d-flex align-items-center'> 
                    <div className="container "> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}> Коллекции</span></div>
                </div>
                <div className='container'>
                    <h2 className="title-parent">Коллекции</h2>
                    <div className="row collection-row">
                            {   
                              
                                 categories.map((item,index)=> {
                                    return  <div  key={index} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2 "><CollectionItem  category={item}/></div>
                                })
                            }
                    </div>
                </div>
           </div>
        )
    }




export default Collections;