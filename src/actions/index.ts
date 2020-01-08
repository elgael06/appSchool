import { ADD_USUARIO, CHANGE_SHOW_LOADING } from "../constants/"
import { iPropsUsuario } from "../reducers/usuario"

/**
 * ADD_USUARIO
 */
export const addUsuario = (usuario:iPropsUsuario) =>({
    type:ADD_USUARIO,
    usuario
});

/**
 * SHOW_LOADING
 */
export const change_loading = (status:boolean) => ({
    type:CHANGE_SHOW_LOADING,
    status
});