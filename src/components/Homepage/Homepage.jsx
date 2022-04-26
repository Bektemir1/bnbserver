import React ,{useEffect,useState} from 'react';
import './Homepage.css';
import CollectionItem from '../CollectionItem/CollectionItem';
import ProductItem from '../ProductItem/ProductItem';
import Benefits from '../Benefits/Benefits';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {connect} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';


const Homepage = ({products,getAllProducts}) => {
    
    // const [products,setProducts] = useState([])

    const [categories, setCategories] = useState([])
    
    const [collectionPaginationParams,setCollectionPaginationParams] = useState({page:1,limit:4})
    
    useEffect(()=>{
        const getCategories= ()=>{
            axios.get(`http://localhost:8000/api/getCategories?page=${collectionPaginationParams.page}&limit=${collectionPaginationParams.limit}`)
            .then((res)=>{
                setCategories(res.data.categories) 
            })
            .catch((e)=>{
                console.log(e)
            })    
    
        }
        
        getCategories()
       
   },[collectionPaginationParams])

   useEffect(()=>{
       const getProducts = ()=>{
           axios.get(`http://localhost:8000/api/getProducts`)
           .then((res)=>{
                getAllProducts(res.data.products);
              
           }).catch((e)=>{
               console.log(e)
           })
         
       }
       getProducts()
   },[getAllProducts])



    

        return(
            <div className='homepage'>
               <div className="container">
                    <div className="home-slider">
                    <Swiper
                       slidesPerView={1}
                       spaceBetween={10}
                       autoplay Navigation Pagination
                       >
                        <SwiperSlide><div className="slider-item"></div></SwiperSlide>
                        <SwiperSlide><div className="slider-item"></div></SwiperSlide>
                        <SwiperSlide><div className="slider-item"></div></SwiperSlide>
                        <SwiperSlide><div className="slider-item"></div></SwiperSlide>
                    </Swiper>

                    
                     
                    </div>

                    <div className="mt-5">
                        <h2 className="homepage-title">Хит продаж</h2>
                            <div className="row product-desktop">
                                {
                                    products.filter(item=>item.bestseller).map((item,index)=>{
                                        
                                        return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0"><ProductItem product={item}/></div>
                                    })
                                }
                           
                              
                            </div>
                            <div className="row product-mobile slider-mobile">
                                <Swiper>
                                    {
                                        products.filter(item=>item.bestseller).map((item,index)=>{
                                            return <SwiperSlide key={index}><div   className="col-lg-3 col-md-4 col-sm-6"><ProductItem product={item}/></div></SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>
                        
                        <div className="text-center">
                            <button className="load-more">Еще</button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="homepage-title">Новинки</h2>
                            <div className="row product-desktop">
                                {
                                    products.filter(item=>item.novelty).map((item,index)=>{
                                        return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0"><ProductItem product={item}/></div>
                                    })
                                }
                            </div>
                            <div className="row product-mobile slider-mobile">
                                <Swiper>
                                    {
                                        products.filter(item=>item.novelty).map((item,index)=>{
                                            return <SwiperSlide  key={index}><div  className="col-lg-3 col-md-4 col-sm-6"><ProductItem product={item}/></div></SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>
                        
                        <div className="text-center">
                            <button className="load-more">Еще</button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="homepage-title">Коллекции</h2>
                        <div className="row collection-desktop">
                            {   
                                 categories.map((item,index)=> {
                                    return  <div  key={index} className="col-lg-3 col-md-4 col-sm-6 "><CollectionItem  category={item}/></div>
                                })
                            }
                        </div>

                        <div className="row collection-mobile">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            >

                            {
                                categories.map((item,index)=>{
                                    return (
                                        <SwiperSlide key={index}>
                                            <div  className="col-lg-3 col-md-4 col-sm-6 "><CollectionItem  category={item}/></div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                         
                    </Swiper>
                           
                        </div>
                        {
                            collectionPaginationParams.limit < 8 ? <div className="text-center"><button className="load-more" onClick={()=>setCollectionPaginationParams(collectionPaginationParams.limit+4)}>Еще</button></div>
                            : ''
                        }
                    </div>

                    <div className="mt-5">
                        <h2 className="homepage-title">Наши преимущества</h2>
                        <Benefits/>
                       
                    </div>


                </div>
            </div>
        )
    }
const mapStateToProps = ({product:{products}}) =>({
    products
})
const mapDispatchToProps = dispatch =>({
    getAllProducts:item => dispatch(getAllProducts(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);