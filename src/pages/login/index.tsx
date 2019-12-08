import React from 'react';
import {useHistory} from 'react-router-dom';
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import { select } from '../../manager/sql.services';

export interface iPropsApps{
	evAddUsuario:(user:iLogUsuario)=>void,
	setShowLoading:(status:boolean)=>void,
}
export interface iLogUsuario{
	id:number,
	password:string
}

const Apps = ({evAddUsuario,setShowLoading}:iPropsApps) => {
	const hist = useHistory();
	const [usuario,setUsuario] 		= useState('');
	const [password,setPasword] 	= useState('');

	const eVsubmit = (e:any)=>{
		setShowLoading(true);
		console.log('iniciar...');
		e.preventDefault();
		select.login(parseInt( usuario ),password,evSesion)
		
	}

	const evSesion=(respuesta:any):void =>{
		console.log("Sesion=>",respuesta)
		if(respuesta==null)
			setTimeout(()=>{
				alert('Error sesion...')
			},
			2000);
		else
			setTimeout(()=>{
				!evAddUsuario ||evAddUsuario({
					id:parseInt(usuario),
					password:password
				});
				hist.push('/ckndsve')
			},
			2000);			
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
						<IonButton onSubmitCapture={eVsubmit} type="submit" disabled={!(usuario!=="" && password!=="")} expand="full">Ingresar</IonButton>
					</form>
					<hr/>

					<IonButton color="success" style={{float:'right',margin:20}} routerLink="/Login/Adduser">
						<h2>Crear Usuario.</h2>
					</IonButton>

        		</IonCardContent>
        	</IonCard>
    	</IonContent>
    </IonPage>);
};

export default Apps;