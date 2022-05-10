import React from 'react';
import images from '../../assets/imgs';
import icons from '../../assets/icons';
import './BasketItem.css'
import { useDispatch } from 'react-redux';
import { removeFromCart,addToCart } from '../../redux/cart/car-action';

const BasketItem = ({cart}) => {
    const dispatch = useDispatch()
    return(
        <div  className='basket-item d-flex'>
            <img className='basket-img' src={`http://localhost:8000/images/${cart.img}`} alt=""/>
            <div>
                <h2 className='basket-title'>{cart.name}</h2>
                <div className='basket-text'>Размер: {cart.size[0]}- {cart.size[cart.size.length-1]}</div>
                <div className="basket-text product-color">Цвет: {<span className={cart.selectedColor}></span>} </div>
                <h2 className='basket-price'>{cart.promoPrice ? Math.round(cart.promoPrice) : cart.price} p <span>{cart.promoPrice ? `${cart.price} p` : ''}</span></h2>
                <div className='basket-btns d-flex align-items-center'>
                    <button onClick={()=>dispatch(removeFromCart(cart))}><img src={icons.minus}  alt=""/></button>
                    <span className='basket-counter'>{cart.quantity}</span>
                    <button onClick={()=>dispatch(addToCart(cart))}><img src={icons.plus}  alt=""/></button>
                </div>
                </div>
                <img onClick={()=>dispatch(removeFromCart(cart))} className='remove-basket' src={icons.closeMenu} alt=""/>
        </div>
    )
}
export default BasketItem;