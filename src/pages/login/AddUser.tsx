import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonItemGroup, IonItem, IonInput, IonButton } from '@ionic/react';

const AddUser = () => {
	const evSubmit = (e:any)=>{
		e.preventDefault()
		console.log("Guardar...")
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
            <label>Nombres : </label>
            <IonInput
			  	required
              placeholder="Nombres." 
            />
          </IonItem>
          <IonItem>
            <label>Apeido Paterno : </label>
            <IonInput
			  	required
              placeholder="Apeido Paterno." 
            />
          </IonItem>
          <IonItem>
            <label>Apeido Materno : </label>
            <IonInput
			  	required
              placeholder="Apeido Materno." 
            />
          </IonItem>
          <IonItem>
            <label>Password : </label>
            <IonInput
			  	required
                 type="password"
            />
			</IonItem>
            <IonItem>
              <label>Confitmar Password : </label>
              <IonInput
				required 
                type="password"
              />
          </IonItem>
			<IonItem>
			</IonItem>

			<IonButton type="submit"  onSubmitCapture={evSubmit} expand="block">
					Guardar
				</IonButton>
        </IonItemGroup>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddUser;
