import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import directoryReducer from './Directory/Directory-reducer';

import userReducer from './User/User-reducer';
import shopReducer from './Shop/Shop-reducer';
import cartReducer from './Cart/Cart-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)
