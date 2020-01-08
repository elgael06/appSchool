import {  ADD_USUARIO, REMOVE_USUARIO, UPDATE_USUARIO, GET_USUARIO } from "../constants";


export interface iPropsUsuario{
    id:number,
    nombre:string
}
export interface iActionsUsuario{
    type:string,
    usuario:iPropsUsuario
}

const Usuario:any = (state:iPropsUsuario,actions:any) =>{
    let {id,nombre} = JSON.parse(sessionStorage.getItem('usuario') || '{"id":0,"nombre":""}');
    switch(actions.type){
        case ADD_USUARIO:
            sessionStorage.setItem('usuario',JSON.stringify(actions.usuario));
            return actions.usuario;
        case REMOVE_USUARIO:
            sessionStorage.removeItem('usuario');
            return {   
                id:0,
                nombre:""
            };
        case UPDATE_USUARIO:
            sessionStorage.setItem('usuario',JSON.stringify(actions.usuario));
            return actions.usuario;
        case GET_USUARIO:
            return {id,nombre,}
        default:
            return {id,nombre,}
    }
}

export default Usuario;