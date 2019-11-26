import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react';
import { warning } from 'ionicons/icons';

const Error:React.FC =()=>{

    return ( <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
            <IonTitle>Error Page.</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <hr />
          <div  style={{textAlign:'center',color:'red',marginTop:50}}><IonIcon icon={warning} /> esta pagina no existe!!!</div>
        </IonContent>
        </IonPage>)
}

export default Error;