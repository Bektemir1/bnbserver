import React,{useState,useEffect} from 'react';

import icons from '../../assets/icons';
import './ProductDetail.css';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { updateProduct } from '../../redux/products/product-action';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../ProductItem/ProductItem';
import { getAllProducts } from '../../redux/products/product-action';
import { addToCart } from '../../redux/cart/car-action';

const ProductDetail = ({history,match}) =>{

    const products = useSelector(state=>state.product.products)
    const carts = useSelector(state=>state.cart.carts)
    const dispatch = useDispatch()
    const [product, setProduct] = useState({size:[]})
    
    // add to basket

    const addBasket = () => {
        if(!product.selectedColor){
            alert('Please select color');
        }
        else{
            dispatch(addToCart(product))
        }
    }
    const updateProductServer =  (id,updatedObj)=>{
    axios.put(`http://localhost:8000/api/updateProduct/${id}`,updatedObj)
    .then((res)=>{
       console.log(res);
    })
    .catch((e)=>{
      console.log(e)
    })
    }

    // get current products detail
    useEffect(()=>{
        const getProduct = () =>{
            axios.get('http://localhost:8000/api/getProduct/'+match.params.id)
            .then((res)=>{
                setProduct(res.data.product)
           
                console.log(res.data.product)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        getProduct()
    },[match.params.id])

    // get related
     useEffect(()=>{
        getAllProducts()
    },[])

    // select color
    const updateColor = (id,color,e) =>{
        var elms = document.querySelectorAll('.color-box');
        // reset all you menu items
        for (var i = 0, len = elms.length; i < len; i++) {
            elms[i].classList.remove('active');
        }
        // mark as active clicked menu item
        e.currentTarget.classList.add("active");
      
        product.selectedColor = color;
        dispatch(updateProduct(product));
        updateProductServer(id,{selectedColor: color})
    }

    // add to saved 
    const updateSaved = (id) =>{
        product.saved = !product.saved
        dispatch(updateProduct(product))
        updateProductServer(id,{saved:product.saved})
       
    }

    return (
        <div className='product-detail pb-5'> 
              <div className='component-path d-flex align-items-center'> 
                <div className="container "> 
                    <span className='back-link' onClick={()=>history.push('/')}>Главная</span> 
                    <span style={{margin:"10px"}}>/</span> 
                    <span className="back-link" onClick={()=>history.push('/collections')}>Коллекции</span>
                    <span style={{margin:"10px"}}>/</span>
                    <span className="back-link" onClick={()=>history.push('/collection-page/'+product.category?._id)}>{product.category?.name}</span>
                    <span style={{margin:"10px"}}>/</span>
                    <span style={{color:'#979797'}}>{product.name}</span>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-wrap ">
                        <div className="detail-desc-img">
                            <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                            <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                            <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                            <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                        
                            
                            <div className="detail-img-box">
                                <img className='detail-img-small' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                                <img className='detail-img-small' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                                <img className='detail-img-small' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                                <img className='detail-img-small' src={`http://localhost:8000/images/${product.img}`} alt=""/>
                            
                            </div>
                        </div>
                        <div className="detail-mob-img">
                            <Swiper >
                                <SwiperSlide> <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/></SwiperSlide>
                                <SwiperSlide> <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/></SwiperSlide>
                                <SwiperSlide> <img className='detail-img' src={`http://localhost:8000/images/${product.img}`} alt=""/></SwiperSlide>
                            </Swiper>
                        </div>

                     
                    </div>
                    <div className="col-lg-6">
                        <div className="detail-info">
                            <h2 className='detail-main-title'>{product.name}</h2>
                            <div className='detail-subtitle'> Артикул:<span>{product.vendorCode}</span></div>
                            
                                
                            <div className="product-color">
                                Цвет:
                                {
                                    // colors

                                    product.color?.map((item,index)=>{
                                       return <div className={product.selectedColor === item ? 'color-box active' : 'color-box' } onClick={(e)=>updateColor(product._id,item,e)} key={index}><span className={item}></span></div>
                                       
                                     
                                    })
                                }
                              
                            </div>

                            <h2 className='detail-price'>{product.promoPrice ? product.promoPrice : product.price} p  {product.promoPrice ?  <span className='price-after'>{product.price} p</span>: ''}</h2>

                            <div className="desc-title">О товаре</div>

                            <p className="detail-desc">{product.description}</p>
                            <div className='detail-params mb-3'>
                                <div className='mr-5'>
                                    <div className='detail-subtitle'>Размерный ряд:  <span>{product.size[0]} - {product.size[product.size.length-1]} </span></div>
                                    <div className='detail-subtitle'>Количество в линейке:  <span>{product.counterSize}</span></div>
                                </div>
                                <div>
                                    <div className='detail-subtitle'>Состав ткани:<span>{product.cloth} </span></div>
                                    <div className='detail-subtitle'>Материал:<span>{product.material} </span></div>
                                </div>
                            </div>
                           
                           <div className='d-flex'>
                               {
                           
                                    carts.find(item=>item._id===product._id && item.selectedColor === product.selectedColor)  ?  <button onClick={()=>history.push('/basket')}  className="add">Перейти в корзину</button>
                                   
                                    :
                                        <button onClick={addBasket} className="add"><img src={icons.whiteBag} alt=""/>Добавить в корзину</button>
                            
                                }
                                 
                              
                               <button onClick={()=>updateSaved(product._id)} className="save">{product.saved ?<img src={icons.bgHeart} alt=""/>  : <img src={icons.whiteHeartIcon} alt=""/> }</button>
                           </div>
                        </div>

                    </div>
                </div>


                
                {/* ===============Related Products ============================== */}

                <h2 className='title-parent'>Похожие товары</h2>
                <div className="row similar-row">
               
                {
                    products.filter(item=>item._id!==product._id).map((item,index)=>{
                       if(index <= 5){
                        if(item.category === product.category?._id){
                            
                            return <div key={item._id }  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                        }
                       }
                      
                    })
                }

                </div>
            </div>
        </div>  
    )
}


export default ProductDetail;