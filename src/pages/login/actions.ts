import {  ADD_USUARIO } from "../../constants"
import { iPropsUsuario } from "../../reducers/usuario"

/**
 * USUARIOS
 */
export const addUsuario = (usuario:iPropsUsuario) =>({
    type:ADD_USUARIO,
    usuario
});
