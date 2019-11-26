import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';


const Asistencia: React.FC = () => {

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
          <span>No Existen Materias...</span>
        </IonContent>
        </IonPage>)
} 


export default Asistencia;