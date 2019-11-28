import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { select } from '../../manager/sql.services'
import { bookmarks } from 'ionicons/icons';
import { useState } from 'react';
import { useEffect } from 'react';

const ite:Object[]=[];

const Asistencia: React.FC = () => {
	const [materias,setMaterias] = useState(ite);

	useEffect(()=>{
		select.all.materias(1,function(items:any[]){
			setMaterias(items)
		});
	},[]);
  return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
            <IonTitle>Materias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <hr />
          {
          materias.length===0 ? <span>No Cuenta con Materias asignadas...</span> : materias.map((e:any)=><IonCard className="welcome-card" key={e.idMateria}>
          <IonCardHeader>
      <IonCardTitle><IonIcon icon={bookmarks} /> {e.name}</IonCardTitle>
          </IonCardHeader>
      </IonCard>)
          }
        </IonContent>
        </IonPage>)
} 


export default Asistencia;