import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonButton, IonLoading } from '@ionic/react';
import { useState } from 'react';

export interface iPropsApps{
	evAddUsuario:(user:iLogUsuario)=>void
}
export interface iLogUsuario{
	id:number,
	password:string
}

const Apps = ({evAddUsuario}:iPropsApps) => {
	const [usuario,setUsuario] 		= useState('');
	const [password,setPasword] 	= useState('');
	const [showLoading,setShowLoading] = useState(false);

	const eVsubmit = (e:any)=>{
		setShowLoading(true);
		console.log('iniciar...');
		e.preventDefault();
		!evAddUsuario ||evAddUsuario({
			id:parseInt(usuario),
			password:password
		})
	}

	return (<IonPage>
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
						<IonButton routerLink="/home" onSubmitCapture={eVsubmit} type="submit" disabled={!(usuario!=="" && password!=="")} expand="full">Ingresar</IonButton>
					</form>
					<hr/>

					<IonButton color="success" style={{float:'right',margin:20}} routerLink="/Login/Adduser">
						<h2>Crear Usuario.</h2>
					</IonButton>

        		</IonCardContent>
        	</IonCard>
    	</IonContent>

		<IonLoading
			isOpen={showLoading}
			onDidDismiss={() => setShowLoading(false)}
			message={'Cargando...'}
			duration={3000}
		/>
    </IonPage>);
};

export default Apps;