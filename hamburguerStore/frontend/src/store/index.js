import { configureStore } from '@reduxjs/toolkit';

import lancheReducer from './ducks/lanches';


export default configureStore({
    reducer:{
        lanches: lancheReducer
    }
});