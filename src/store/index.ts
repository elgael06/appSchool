// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers';

const initialState:any = {
    Usuario: {
                id:1,
                nombre:"gael"
            },
    showLoading:false
};

export default createStore(reducers,initialState);


