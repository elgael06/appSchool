import React, { Fragment } from 'react';
import { IonContent,
		 IonHeader, 
		 IonItem, 
		 IonLabel, 
		 IonPage, 
		 IonTitle, 
		 IonToolbar, 
		 IonCard, 
		 IonCardContent, 
		 IonInput, 
		 IonButton, 
		 IonAlert, 
		 IonIcon,
		 IonToast,
		 IonFabButton
	} from '@ionic/react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addUsuario } from './actions';
import {change_loading} from '../../actions';
import { select } from '../../manager/sql.services';
import { logIn, logoGoogle, personAdd } from 'ionicons/icons';

import * as firebase from "firebase/app";

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
	const [showToast,setShowToast]	= useState(false);
	const [mensajeToast,setMensaje]	= useState(''); 
	const [colorState, setColor]	= useState('primary');

	const eVsubmit = (e:any)=>{
		e.preventDefault();
		setShowLoading(true);
		console.log('iniciar...');
		setTimeout(()=>select.login(parseInt( usuario ),password,evSesion),300);
		
	}

	const consultarCorreoGoogle = async () => {
		setShowLoading(true);
		try{
			let provider = new firebase.auth.GoogleAuthProvider();
			let result:any = await firebase.auth().signInWithPopup(provider).catch(err=>{
				onError(err.toString());
			});
			const {user, credential} = result;
			if(user){
				evSesion({id:user.uid,nombre:user.displayName,email:user.email,foto:user.photoURL,credential});
			}else setMsgError(true);
		}catch(error){
			console.log(error.message);
		}
	}

	const evSesion = (respuesta:any):void =>{
		console.log("Sesion=>",respuesta)
		if(respuesta==null){
			onError('Error al iniciar sesion !!!');
		}
		else{
			setMensaje(`Bien venido ${respuesta.nombre}...`);
			setColor('success');
			setShowToast(true);
			evAddUsuario(respuesta);
			}
	}
	const onError = (err:string)=>{
		setMensaje(err);
		setColor('danger');
		setShowToast(true);
	}
	const acceptError =()=>{
		setMsgError(false);
	}

	return (<IonPage>
		<ContentApp>
			<form onSubmit={eVsubmit}>
				<IonItem>
					<IonLabel position="floating">Correo</IonLabel>
						<IonInput 
							type="number" 
							onIonChange={(e:any)=>setUsuario(e.target.value)} 
							value={usuario} 
						/>
				</IonItem>
				<IonItem>
					<IonLabel position="floating">Contraseña</IonLabel>
					<IonInput 
						type="password" 
						value={password} 
						onIonChange={(e:any)=>setPasword(e.target.value)} 
					/>
				</IonItem>
				<hr/>
				<IonButton 
					color="primary"  
					type="submit"
					disabled={!(usuario!=="" && password!=="")} 
					expand="full"
				>Ingresar <IonIcon icon={logIn}style={{marginLeft:'10px'}}  /> </IonButton>
			</form>
		</ContentApp>
		<IonAlert 
			isOpen={msgError}
			header='Error, sesion.'
			onDidDismiss={acceptError}
			message='el usuario y/o la contraseña son incorrectos.'
			buttons={['Aceptar']}
		/>
		<div style={{display:'flex',justifyContent:'center',paddingLeft:'50px',paddingRight:'50px'}}>
		<IonFabButton
			style={{margin:'auto'}} 
			color="secondary"
			routerLink="/Login/Adduser">
				<IonIcon icon={personAdd} style={{padding:'10px'}} />
		</IonFabButton>
		<IonFabButton 
			style={{margin:'auto'}}
			color="light"
			onClick={consultarCorreoGoogle}>
				<IonIcon icon={logoGoogle} style={{padding:'10px'}} />
		</IonFabButton>
		</div>
		<br />
		<IonToast 
			isOpen={showToast}
			animated
			position="top"
			color={colorState}
			onDidDismiss={() => setShowToast(false)}
			message={mensajeToast}
			duration={1500}
		/>
    </IonPage>);
};

const ContentApp = ({children}:any) =>(<Fragment>
	<IonHeader>
	<IonToolbar color="primary">
		<IonTitle >Iniciar Sesión SchollApp</IonTitle>
	</IonToolbar>
</IonHeader>
<IonContent>
<IonCard style={{marginTop:10}}>
	<IonCardContent>
		{children}
	</IonCardContent>
</IonCard>
</IonContent>
</Fragment>);

const mapStateToProps = (state:any) =>({
});

const mapDispatchToProps = (dispatch:any) =>({
  evAddUsuario({id,nombre,email='',foto='',credential=''}:any){
    if(id){
      let user={
        id,
		nombre,
		email,
		foto,
		credential
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