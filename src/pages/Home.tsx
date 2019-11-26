import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/react';
import { contact } from 'ionicons/icons';

import React from 'react';
import './Tab1.css';
import accesos, { iAcesos } from '../models/accesos';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
			Bienvenido. 
			<IonIcon icon={contact} style={{float:'right'}} />
		  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    	{accesos.map((e:iAcesos)=>
         <IonCard className="welcome-card" href={e.href}>
          	<IonCardHeader>
				<IonCardTitle><IonIcon icon={e.icon} /> {e.title}</IonCardTitle>
				<IonCardSubtitle>{e.subtitle}</IonCardSubtitle>
          	</IonCardHeader>
        </IonCard>)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
