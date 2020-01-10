import React, { useEffect } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { list, people, calendar, chatboxes, crop } from 'ionicons/icons';
import { iPropsUsuario } from '../../reducers/usuario';
import { connect } from 'react-redux'
interface iPropsActions{
  usuario:iPropsUsuario
} 

const Actions = ({usuario}:iPropsActions) => {
  useEffect(()=>{
		const URL = window.location.pathname.split('/');
		console.log(URL[1])
	});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon icon={crop} style={{fontSize:'25px',float:'left'}} /> 
            <strong style={{float:'left',marginTop:'2px',marginLeft:'10px'}}>Opciones</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <Etiquetas icon={list} name='Editas materias'link='/materia/edit' />
        <Etiquetas icon={people} name='Lista alumnos'link='/alumnos/edit' />
        <Etiquetas icon={calendar} name='Editar trimestre'link='/trimestre/edit' />
        <Etiquetas icon={chatboxes} name='Agregar/eliminar notas'link='/notas/edit' />
      </IonContent>
    </IonPage>
  );
};

const Etiquetas =({icon,name,link}:any)=>{
  return(
    <IonCard className="welcome-card" routerLink={link}>
        <IonCardHeader>
  <IonCardTitle><IonIcon icon={icon} style={{float:'right'}} /> {name}</IonCardTitle>
        </IonCardHeader>
    </IonCard>);
}


const mapStateToProps = (state:any) =>({
  usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({
});

export default connect(mapStateToProps,mapDispatchToProps)(Actions);
