import React from 'react';
import './ProductItem.css'
import axios from 'axios';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import { updateProduct } from '../../redux/products/product-action';
const ProductItem = ({product,updateProduct}) =>{
    
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
        <div className='product-item mb-2'>
            {
                product.discount ?  <div className="discount"><span>{product.discount || 50} %</span></div> : ''
            }
             <span onClick={()=>updateProductRequest(product._id)}  className={`liked ` + (product.saved===true  ? 'saved' : '')}>
                 
            {
                product.saved  ? <span><i style={{fontSize:'23px', color:'#E5271B'}} className="fa-solid fa-heart"></i></span> : <img src={icons.whiteHeartIcon} alt=""/>
                
            }
                 
                 </span>
            <div className='product-img'>
               
                <img src={`http://localhost:8000/images/${product.img}`} alt=""/>
            </div>
           <div className="product-detail">
                <span className="product-name">{product.name}</span>
                    <h2 className="product-price">{product.price}</h2>
                <span className="product-size">Размер: 42-50</span>
                <div className="product-color">
                    <span className="blue"></span>
                    <span className="green"></span>
                    <span className="grey"></span>
                    <span className="brown"></span>
                    <span className="skyblue"></span>
                    <span className="white"></span>
                    <span className="darkgrey"></span>
                    <span className="red"></span>
               </div>
           </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    updateProduct: item => dispatch(updateProduct(item))
})
export default connect(null,mapDispatchToProps)(ProductItem);