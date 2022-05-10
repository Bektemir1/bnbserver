import cartActionType from './cart-types';

export const addToCart = (product) =>({
    type: cartActionType.ADD_CART,
    payload: product
})

export const removeFromCart = (product) =>({
    type:cartActionType.REMOVE_CART,
    payload: product,
})

export const clearCart = product => ({
    type: cartActionType.CLEAR_CART,
    payload:product
})