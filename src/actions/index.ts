import { TYPES } from "../constants"
import { iPropsUsuario } from "../reducers/usuario"

/**
 * USUARIOS
 */
export const addUsuario = (usuario:iPropsUsuario) =>({
    type:TYPES.ADD_USUARIO,
    usuario
});

/**
 * SHOW_LOADING
 */
export const change_loading = (status:boolean) => ({
    type:TYPES.CHANGE_SHOW_LOADING,
    status
});