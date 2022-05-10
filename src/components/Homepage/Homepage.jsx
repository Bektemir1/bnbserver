import React ,{useEffect,useState} from 'react';
import './Homepage.css';
import CollectionItem from '../CollectionItem/CollectionItem';
import ProductItem from '../ProductItem/ProductItem';
import Benefits from '../Benefits/Benefits';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination,} from 'swiper'
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts } from '../../redux/products/product-action';
import { getAllCategories } from '../../redux/category/category-action';
import 'swiper/css/pagination';


const Homepage = () => {
    const [limit,setLimit] = useState(4);
    const [bestLimit, setBestLimit] = useState(4)
    const [novLimit, setNovLimit] = useState(4)


    const products = useSelector(state=>state.product.products)

    const categories = useSelector(state=>state.category.categories);


    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCategories(limit))
        dispatch(getAllProducts())
     
    },[limit])

 

    return(
            <div className='homepage'>
               <div className="container">
                    <div className="home-slider">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{clickable:true}}
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
                                        if(index < bestLimit){
                                            return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0"><ProductItem product={item}/></div>
                                        }
                                    })
                                }
                           
                              
                            </div>
                            <div className="row product-mobile slider-mobile">
                                <Swiper>
                                    {
                                        products.filter(item=>item.bestseller).map((item,index)=>{
                                            if(index < bestLimit){
                                                return <SwiperSlide key={index}><div className="col-lg-3 col-md-4 col-sm-6"><ProductItem product={item}/></div></SwiperSlide>
                                      
                                            }
                                        })
                                    }
                                </Swiper>
                            </div>
                        
                        <div className="text-center">
                            {
                                bestLimit < 8  ? <button onClick={()=>setBestLimit(bestLimit+4)} className="load-more">Еще</button> : ''
                            }
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="homepage-title">Новинки</h2>
                            <div className="row product-desktop">
                                {
                                    products.filter(item=>item.novelty).map((item,index)=>{
                                        if(index < novLimit){
                                            return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0"><ProductItem product={item}/></div>
                                   
                                        }   
                                    })
                                }
                            </div>
                            <div className="row product-mobile slider-mobile">
                                <Swiper>
                                    {
                                        products.filter(item=>item.novelty).map((item,index)=>{
                                            if(index < novLimit){
                                                return <SwiperSlide  key={index}><div  className="col-lg-3 col-md-4 col-sm-6"><ProductItem product={item}/></div></SwiperSlide>
                                       
                                            }    
                                        })
                                    }
                                </Swiper>
                            </div>
                        
                        <div className="text-center">
                            {
                                novLimit < 8   ? <button onClick={()=>setNovLimit(novLimit+4)} className="load-more">Еще</button> : ''
                            }
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
                           limit < 8 ?  <div className="text-center"><button onClick={()=>setLimit(8)} className="load-more">Еще</button></div> : ''
                         
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


export default Homepage;