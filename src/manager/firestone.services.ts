import firebase from './firebase.services';
import { materia } from '../models/materia';

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots:true,
});

export const selectAllMateriasIdProfesor = (id:string)=>{
    db.collection('materias').get()
    const materias = db.collection('materias').where('id_profesor','==',id).orderBy('nombre');
    return materias;
}

export const insertMateria = async (value:materia) => {
    console.log(firebase.auth())
    let respuesta = await db.collection('materias').add({...value});
    if(respuesta){
        console.log('guardado: ',respuesta);
        return respuesta.id;
    }
    return 0;
}

