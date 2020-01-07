import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonItemGroup, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';
import { insert } from '../../manager/sql.services';
import { type } from 'os';

const AddUser = () => {
  const [name,setName] = useState('');
  const [apPat,setApPat] = useState('');
  const [apMat,setApMat] = useState('');
  const [password,setPassword] = useState('');
  const [password2,setPassword2] = useState('');
  const [email,setEmail] = useState('');

	const evSubmit = (e:any)=>{
		e.preventDefault()
    console.log("Guardar...")
    insert.Profesor(
      name,
      apPat,
      apMat,
      password,
      email
	);
	window.location.href ='/';
	}

	return (
		<IonPage>
		<IonHeader>
			<IonToolbar color="success">
			<IonButtons slot="start">
				<IonBackButton defaultHref="/login" />
			</IonButtons>
			<IonTitle>Crear Usuario</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<form style={{padding:15}} onSubmitCapture={evSubmit}>
			<IonItemGroup>
			<IonItem>
				<IonLabel position="floating">Nombres : </IonLabel>
				<IonInput
				required
				value={name}
				onIonChange={(e:any)=>setName(e.target.value)}
				/>
			</IonItem>
			<IonItem>
				<IonLabel position="floating">Apeido Paterno : </IonLabel>
				<IonInput
					required
					value={apPat}
					onIonChange={(e:any)=>setApPat(e.target.value)}
				/>
			</IonItem>
			<IonItem>
				<IonLabel position="floating">Apeido Materno : </IonLabel>
				<IonInput
					required
					value={apMat}
					onIonChange={(e:any)=>setApMat(e.target.value)}
				/>
			</IonItem>
			<IonItem>
				<IonLabel position="floating">Email : </IonLabel>
				<IonInput
					required
					value={email}
					type='email'
					onIonChange={(e:any)=>setEmail(e.target.value)}
				/>
			</IonItem>
			<IonItem>
				<IonLabel position="floating">Password : </IonLabel>
				<IonInput
					required  
					type="password"
					value={password}
					onIonChange={(e:any)=>setPassword(e.target.value)}
				/>
				</IonItem>
				<IonItem>
				<IonLabel position="floating">Confitmar Password : </IonLabel>
				<IonInput
					value={password2}
					onIonChange={(e:any)=>setPassword2(e.target.value)}
					required
					type="password"
				/>
			</IonItem>
				<IonItem>
				</IonItem>

				<IonButton type="submit" color="success" onSubmitCapture={evSubmit} expand="block">
						Guardar
					</IonButton>
			</IonItemGroup>
			</form>
		</IonContent>
		</IonPage>
	);
};


export default AddUser;
