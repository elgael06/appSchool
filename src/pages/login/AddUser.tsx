import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const AddUser: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Nuevo Profesor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Datos</p>
        <strong>this is an asignation.</strong>
        
      </IonContent>
    </IonPage>
  );
};

export default AddUser;
