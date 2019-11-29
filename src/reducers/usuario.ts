import { TYPES } from "../constants";


export interface iPropsUsuario{
    id:string,
    nombre:string
}
export interface iActionsUsuario{
    type:string,
    usuario:iPropsUsuario
}

const Usuario:any = (state:iPropsUsuario,actions:iActionsUsuario) =>{
    
    switch(actions.type){
        case TYPES.ADD_USUARIO:
            return actions.usuario;
        case TYPES.REMOVE_USUARIO:
            return null;
        case TYPES.UPDATE_USUARIO:
            return actions.usuario;
        case TYPES.GET_USUARIO:
            return state;
        default:
            return {   
                    id:1,
                    nombre:"gael"
                }
    }
}

export default Usuario;