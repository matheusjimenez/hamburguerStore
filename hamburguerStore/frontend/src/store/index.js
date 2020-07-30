import { configureStore } from '@reduxjs/toolkit';

import lancheReducer from './ducks/lanches';
import cartReducer from "./ducks/cart";


export default configureStore({
    reducer: {
        lanches: lancheReducer,
        cart: cartReducer
    }
});