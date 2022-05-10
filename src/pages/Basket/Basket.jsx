import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';
import './Basket.css';
import ProductItem from '../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../redux/products/product-action';
import { getAllCategories } from '../../redux/category/category-action';
import OrderModal from '../OrderModal/OrderModal';

const Basket = ({history}) =>{
    const categories = useSelector(state=>state.category.categories);
    const products = useSelector(state=>state.product.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCategories())
        dispatch(getAllProducts())
    },[])


    const carts = useSelector(state=>state.cart.carts)
    const quantityLine = carts.reduce((sum,current)=>{
        return sum+current.quantity
    },0)
    const quantityProduct = quantityLine*5;
    const totalPrice = carts.reduce((sum,current)=>{
        return sum+current.price * current.quantity
    },0)
    const totalDiscount = carts.reduce((sum,current)=>{
        return current.promoPrice ? sum+(current.price - current.promoPrice) * current.quantity : ''
    },0)
    const totalPriceAfterDiscount = totalPrice-totalDiscount;

   
    return(
        <div className='basket pb-5'>
       
            <OrderModal/>
            <div className='component-path d-flex align-items-center'> 
                <div className="container "> 
                    <span className='back-link' onClick={()=>history.push('/')}>Главная</span> 
                    <span style={{margin:"10px"}}>/</span> 
                    <span>Корзина</span>
                </div>
            </div>
            <div className="container">
                {
                    carts.length ? 
                    <div className="row basket-row">
                    <div className="col-lg-7 ">
                        {carts.map((cart,index)=>{
                            return  <BasketItem cart={cart} key={index}/>
                        })}
                       
                    </div>
                    <div className="col-lg-5">
                        <div className="order">
                            <h2 className="order-title">Сумма заказа</h2>
                            <div className='order-table'>
                                <span>Количество линеек:</span>
                                <span>{quantityLine}</span>
                            </div>
                            <div className='order-table'>
                                <span>Количество товаров::</span>
                                <span>{quantityProduct}</span>
                            </div> 
                            <div className='order-table'>
                                <span>Стоимость:</span>
                                <span>{totalPrice} р</span>
                            </div>
                            <div className='order-table'>
                                <span>Скидка:</span>
                                <span>{Math.round(totalDiscount)} p</span>
                            </div>
                            <hr/>
                            <div className='order-table'>
                                <span>Итого к оплате:</span>
                                <span>{Math.round(totalPriceAfterDiscount)} p</span>
                            </div>

                            <button  data-toggle="modal" data-target="#exampleModalCenter" className='order-btn'>Оформить заказ</button>
                        </div>
                    </div>
                </div>
                :
                   <div>
                       <h2 className='title-parent'>Корзина</h2>
                         {
                            !carts.length ?  <div style={{marginTop: "-10px", marginBottom:'20px'}}>У Вас пока нет товаров в корзине</div> : ''
                        
                    
                         }
                        {
                            !carts.length ? <div className='title-parent'>Возможно вас заинтересует</div> : ''
                        }
                    <div className="row basket-row">

                        {
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
              

                }
            </div>
           
        </div>
    )
}
export default Basket;