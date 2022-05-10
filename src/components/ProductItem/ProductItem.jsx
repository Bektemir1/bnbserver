import React from 'react';
import './ProductItem.css'
import axios from 'axios';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import {updateProduct } from '../../redux/products/product-action';
import { withRouter } from 'react-router-dom';
const ProductItem = ({product,updateProduct,history}) =>{
    
    const updateProductRequest = (id) =>{
        
        product.saved = !product.saved
        updateProduct(product)
      
        axios.put(`http://localhost:8000/api/updateProduct/${id}`,{ saved: product.saved})
        .then((res)=>{
           console.log(res)
           
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    return(
        <div  className='product-item mb-2'>
            {
                product.discount ?  <div className="discount"><span>{product.discount || 50} %</span></div> : ''
            }
                <span onClick={()=>updateProductRequest(product._id)}  className={`liked ` + (product.saved===true  ? 'saved' : '')}>
                 
            {
                product.saved  ? <span><i style={{fontSize:'23px', color:'#E5271B'}} className="fa-solid fa-heart"></i></span> : <img src={icons.whiteHeartIcon} alt=""/>
                
            }
                 
                 </span>
            <div className='product-img' onClick={() => {history.push('/collections/product-detail/'+product._id)} }>
               
                <img src={`http://localhost:8000/images/${product.img}`} alt=""/>
            </div>
           <div className="product-info">
                <span className="product-name">{product.name}</span>
                    <h2 className="product-price">{product.promoPrice  ? Math.round(product.promoPrice) : product.price} p  {product.promoPrice ? <span className="price-after">{product.price} p</span> : '' }</h2>
                <span className="product-size">Размер: {product.size[0]} - {product.size[product.size.length-1]}</span>
                <div className="product-color">
                    {
                        product.color.map((item,index)=>{
                            return <span key={index} className={item}></span>
                        })
                    }
               </div>
           </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    updateProduct: item => dispatch(updateProduct(item))
})
export default withRouter(connect(null,mapDispatchToProps)(ProductItem))