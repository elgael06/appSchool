import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { connect } from 'react-redux';

import React from 'react';
import accesos, { iAcesos } from '../models/accesos';

const Home = () =>(<IonPage>
	<IonHeader>
		<IonToolbar>
			<IonTitle>
				<b>Inicio</b>
			</IonTitle>
		</IonToolbar>
	</IonHeader>
	<IonContent>
		{accesos.map((e:iAcesos)=>
		<IonCard className="welcome-card" routerLink={e.href} key={e.href}>
			<IonCardHeader>
				<IonCardTitle>
					<IonIcon icon={e.icon} style={{float:'right'}} />
					{e.title}
				</IonCardTitle>
				<IonCardSubtitle>{e.subtitle}</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>)}
	</IonContent>
</IonPage>);



const mapStateToProps = (state:any) =>({
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({

});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
