import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';

const Actions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonCard className="welcome-card" href="/actions/materia">
          	<IonCardHeader>
				<IonCardTitle><IonIcon icon={addCircle} /> Agregar Materia</IonCardTitle>
          	</IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Actions;
