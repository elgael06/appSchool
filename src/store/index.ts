// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers';

const initialState:any = {
    Usuario: {
                id:0,
                nombre:"",
                email:'',
                foto:'',
                credential:''
            },
    showLoading:false
};

export default createStore(reducers,initialState);


