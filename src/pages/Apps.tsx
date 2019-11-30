import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';

const Apps = () => {
  const [usuario,setUsuario]=useState('');
  const [password,setPasword] = useState('');

	const eVsubmit = (e:any)=>{
		e.preventDefault();
		console.log('iniciar...')
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ScholApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{marginTop:50}}>
          <IonCardHeader>
            <IonCardTitle>Iniciar Secion.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
			<form onSubmit={eVsubmit}>
				<IonItem>
				<IonLabel position="floating">Id Usuario</IonLabel>
				<IonInput type="number" onIonChange={(e:any)=>setUsuario(e.target.value)} value={usuario} />
				</IonItem>
				<IonItem>
					<IonLabel position="floating">Contraseña</IonLabel>
					<IonInput type="password" value={password} onIonChange={(e:any)=>setPasword(e.target.value)} />
				</IonItem>
				<hr/>
				<IonButton  disabled={!(usuario!=="" && password!=="")} expand="full">Ingresar</IonButton>
				<hr/>

				<IonButton onSubmit={eVsubmit} type="submit" color="success" style={{float:'right',margin:20}} routerLink="/apps/details">
					<h2>Crear Usuario.</h2>
				</IonButton>
			</form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Apps;