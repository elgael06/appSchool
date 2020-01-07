//libreria
import { combineReducers } from 'redux';

import Usuario from './usuario';
import showLoading from './showLoading';


const reducer:any = combineReducers({
    showLoading,
    Usuario,
});

export default reducer;