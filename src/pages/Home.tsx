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

import React, { useEffect } from 'react';
import './Tab1.css';
import accesos, { iAcesos } from '../models/accesos';
import { iPropsUsuario } from '../reducers/usuario';

interface iPropsHome{
  usuario:iPropsUsuario
} 

const Home = ({usuario}:iPropsHome) => {
	useEffect(()=>{
		const URL = window.location.pathname.split('/');
		console.log(URL[1])
		if(URL[1]!=='apps')
			{(usuario.id>0)  || (function(){window.location.href = "apps"}())}
	});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
			Bienvenido
    		<u style={{padding:5}}>{usuario.nombre}</u>
			<IonIcon icon={contact} style={{float:'right'}} />
		  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    	{accesos.map((e:iAcesos)=>
         <IonCard className="welcome-card" href={e.href} key={e.href}>
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
