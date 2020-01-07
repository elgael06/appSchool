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
import { connect } from 'react-redux';

import React, { useEffect } from 'react';
import './Tab1.css';
import accesos, { iAcesos } from '../models/accesos';
import { iPropsUsuario } from '../reducers/usuario';
import { useParams } from 'react-router';

interface iPropsHome{
  usuario:iPropsUsuario
} 

const Home = ({usuario}:iPropsHome) => {
  const url =   useParams();
	useEffect(()=>{
    console.log(url);
    console.log('usuario:',usuario);
	},[]);

  	return (<IonPage>
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
				<IonCard className="welcome-card" routerLink={e.href} key={e.href}>
					<IonCardHeader>
						<IonCardTitle><IonIcon icon={e.icon} /> {e.title}</IonCardTitle>
						<IonCardSubtitle>{e.subtitle}</IonCardSubtitle>
					</IonCardHeader>
				</IonCard>)}
		</IonContent>
	</IonPage>
  );
};



const mapStateToProps = (state:any) =>({
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({

});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
