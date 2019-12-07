//libreria
import { combineReducers } from 'redux';

import Usuario from './usuario';
import showLoading from './showLoading';


const reducer:any = combineReducers({
    Usuario,
    showLoading
});

export default reducer;