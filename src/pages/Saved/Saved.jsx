import React,{useEffect, useState} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Saved.css';
import {useSelector,useDispatch} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';
import { getAllCategories } from '../../redux/category/category-action';

const Saved  = ({history}) => {
 
    const saved = useSelector(state=>state.product.products.filter(item=>item.saved))
    const products = useSelector(state=>state.product.products)
    const categories = useSelector(state=>state.category.categories)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
        dispatch(getAllCategories())
     },[])

   

    return(
       <div className="saved_wrapper pb-5">
            <div className='component-path d-flex align-items-center'> 
                    <div className="container"> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}>Избраннoе</span></div>
            </div>
            <div className="container saved_container">
                <h2 className='title-parent'>Избранное</h2>
                    {
                        <div style={{marginTop: "-10px", marginBottom:'20px'}}> {saved.length? `Количество избранных товаров ${saved.length}` : 'У вас нет избранных товаров'}</div>
                        
                    
                    }
                    {
                        !saved.length ? <div className='title-parent'>Возможно вас заинтересует</div> : ''
                    }
              <div className="row saved_row">
              {
                   saved.length ? saved.map((item)=>{
                       return  <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                   }) :
                    
                   categories.map((category)=>{
                        let count= false;
                            return products.map((product)=>{
                                if(count){
                                    return null;
                                }
                                else{
                                    if(product.category === category._id){
                                        count=true;
                                        return <div key={product._id }  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={product}/></div>
                                    }
                                }
                            })
                        })
                 }

              </div>
            </div>
       </div>
    )
}

export default Saved;