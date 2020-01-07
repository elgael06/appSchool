import { TYPES } from "../constants";


export interface iPropsUsuario{
    id:number,
    nombre:string
}
export interface iActionsUsuario{
    type:string,
    usuario:iPropsUsuario
}

const Usuario:any = (state:iPropsUsuario,actions:any) =>{
    console.log('actions usuario');
    console.log(actions.type);
    console.log(state)
    switch(actions.type){
        case TYPES.ADD_USUARIO:
            return actions.usuario;
        case TYPES.REMOVE_USUARIO:
            return {   
                id:0,
                nombre:""
            };
        case TYPES.UPDATE_USUARIO:
            return actions.usuario;
        case TYPES.GET_USUARIO:
            return state;
        default:
            return {   
                    id:0,
                    nombre:"g"
                }
    }
}

export default Usuario;