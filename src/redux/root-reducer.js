import {combineReducers} from 'redux';
import categoryReducer from './category/category-reducer';
import productReducer from './products/product-reducer';
import cartReducer from './cart/cart-reducer';
import { newsReducer } from './news/newsReducer';
const rootReducer = combineReducers({
    category: categoryReducer,
    product:productReducer,
    cart:cartReducer,
    news:newsReducer

})

export default rootReducer;