import { list, book, pie, people, search } from "ionicons/icons";

export interface iAcesos{
    icon:{
        ios: string;
        md: string;
      },
    title:string,
    subtitle:string,
    href:string
}

const accesos = [
    {
        icon:list,
        title:'Asistencias',
        subtitle:'',
        href:'/asistencia'
    },
    {
        icon:book,
        title:'Calificaciones',
        subtitle:'',
        href:'/Calificaciones'
    },
    {
        icon:people,
        title:'Directorio',
        subtitle:'',
        href:'/Directorio'
    },
    {
        icon:pie,
        title:'Informes',
        subtitle:'',
        href:'/Informes'
    },
    {
        icon:search,
        title:'Examinador',
        subtitle:'',
        href:'/Examinador'
    }
];


export default accesos;