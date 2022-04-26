import React,{useEffect} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Saved.css';
import axios from 'axios'
import {connect} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';


const Saved  = ({history,getAllProducts, products}) => {

    useEffect(()=>{
        const getProducts = () =>{
            axios.get('http://localhost:8000/api/getProducts')
            .then((res)=>{
                getAllProducts(res.data.products)
            })
        }
        getProducts()
    },[getAllProducts])

    return(
       <div className="saved_wrapper pb-5">
            <div className='component-path d-flex align-items-center'> 
                    <div className="container"> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}>Избранные</span></div>
            </div>
            <div className="container saved_container">
              <div className="row saved_row">
              {
                   products.filter(item=>item.saved).length ? products.filter(item=>item.saved).map((item,index)=>{
                       return  <div key={index} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                   })
                   :
                    (
                   <div className="empty-box">
                       You don't have any saved products yet
                   </div>
                    )
               }
              </div>
            </div>
       </div>
    )
}
const mapDispatchToProps = dispatch =>({
    getAllProducts: item => dispatch(getAllProducts(item))
})
const mapStateToProps = ({product:{products}}) =>({
    products
})
export default connect(mapStateToProps,mapDispatchToProps)(Saved);