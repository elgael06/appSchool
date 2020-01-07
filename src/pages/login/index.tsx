import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonButton, IonAlert } from '@ionic/react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addUsuario } from './actions';
import {change_loading} from '../../actions';
import { select } from '../../manager/sql.services';

export interface iPropsApps{
	evAddUsuario:(user:iLogUsuario)=>void,
	setShowLoading:(status:boolean)=>void,
}
export interface iLogUsuario{
	id:number,
	password:string
}

const Login = ({evAddUsuario,setShowLoading}:iPropsApps) => {
	const [usuario,setUsuario] 		= useState('');
	const [password,setPasword] 	= useState('');
	const [msgError,setMsgError]	= useState(false);

	const eVsubmit = (e:any)=>{
		setShowLoading(true);
		console.log('iniciar...');
		e.preventDefault();
		select.login(parseInt( usuario ),password,evSesion);
		
	}

	const evSesion = (respuesta:any):void =>{
		console.log("Sesion=>",respuesta)
		//setTimeout(()=>setShowLoading(false),1000);
		if(respuesta==null){
			setShowLoading(false);
			setMsgError(true);
		}
		else
			evAddUsuario(respuesta);
	}
	const acceptError =()=>{
		setMsgError(false);
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
					<form onSubmitCapture={eVsubmit}>
						<IonItem>
							<IonLabel position="floating">Id Usuario</IonLabel>
							<IonInput type="number" onIonChange={(e:any)=>setUsuario(e.target.value)} value={usuario} />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Contraseña</IonLabel>
							<IonInput type="password" value={password} onIonChange={(e:any)=>setPasword(e.target.value)} />
						</IonItem>
						<hr/>
						<IonButton color="primary" onSubmitCapture={eVsubmit} type="submit" disabled={!(usuario!=="" && password!=="")} expand="full">Ingresar</IonButton>
					</form>
					<hr/>


        		</IonCardContent>
        	</IonCard>
					<IonButton color="success" style={{position:'fixed', margin:20, bottom:0,display:'flex',right:0 }} routerLink="/Login/Adduser">
					Crear Usuario
					</IonButton>
    	</IonContent>
		<IonAlert 
			isOpen={msgError}
			header='Error, sesion.'
			onDidDismiss={acceptError}
			message='el usuario y/o la contraseña son incorrectos.'
			buttons={['Aceptar']}
		/>
    </IonPage>);
};


const mapStateToProps = (state:any) =>({
});

const mapDispatchToProps = (dispatch:any) =>({
  evAddUsuario(usuario:any){
    if(usuario.id>0){
      let user={
        id:usuario.id,
        nombre:`${usuario.nombre}.`
      }
      console.log(user);
      dispatch(addUsuario(user))
    }
  },
  setShowLoading(status:boolean){
	dispatch(change_loading(status))
  }
});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(Login);