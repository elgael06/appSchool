import React, { useState } from 'react';
import { IonContent, IonModal, IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonRouterLink } from '@ionic/react';
import { arrowBack, addCircle } from 'ionicons/icons';
import { iModal } from './interfaces';


const ModalAgregarMateria = (props:iModal) => {
	const [materia, setMateria] = useState('');
	
    const changed = (e:any) => {
        let r = e.target.value
        setMateria(r)
    }

    const evSubmit = (e:any) => {
        e.preventDefault();
        if(materia){
            props.evSubmit(materia.toUpperCase());
            setMateria('')
        }
    }

	return(<IonModal 
        isOpen={props.openModal}
        animated
        keyboardClose={false}
        showBackdrop={false}
        onDidDismiss={()=>props.setOpenModal(false)}
    >
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" onClick={()=>props.setOpenModal(false)}>
                    <IonRouterLink href="/actions/materia"></IonRouterLink>
                    <IonIcon  icon={arrowBack} />
                </IonButtons>
                <IonTitle style={{marginTop:10}}>
                    Agregar.
                </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent >
            <form onSubmit={evSubmit}>
                <IonItem style={{marginTop:40}}>
                    <IonLabel position="stacked">Nombre Materia</IonLabel>
                    <IonInput 
                        placeholder="Escriba el nombre de la materia." 
                        autocomplete={'off'} 
                        value={materia} 
                        onIonChange={changed} 
                    />
                </IonItem>
                <IonButton disabled={materia===""} type="submit" style={{marginTop:40}} expand="full" >
                    Agregar <IonIcon icon={addCircle} />
                </IonButton>
            </form>
		</IonContent>
	</IonModal>);
}

export default ModalAgregarMateria;