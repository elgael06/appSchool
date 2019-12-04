import { TYPES } from "../constants"
import { iPropsUsuario } from "../reducers/usuario"

/**
 * USUARIOS
 */
export const addUsuario = (usuario:iPropsUsuario) =>({
    type:TYPES.ADD_USUARIO,
    usuario
});