import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonItemGroup, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';

const AddUser = () => {
	const evSubmit = (e:any)=>{
		e.preventDefault()
		console.log("Guardar...")
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Crear</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3 style={{padding:10,marginTop:30}}>Datos Profesor</h3>
		<form style={{padding:15}} onSubmitCapture={evSubmit}>
        <IonItemGroup>
          <IonItem>
            <IonLabel position="floating">Nombres : </IonLabel>
            <IonInput
			  	required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apeido Paterno : </IonLabel>
            <IonInput
			  	required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apeido Materno : </IonLabel>
            <IonInput
			  	required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password : </IonLabel>
            <IonInput
				required  
                 type="password"
            />
			</IonItem>
            <IonItem>
              <IonLabel position="floating">Confitmar Password : </IonLabel>
              <IonInput
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
