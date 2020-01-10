import React, { useState } from 'react';
import { 
    IonContent, 
    IonModal, 
    IonHeader, 
    IonToolbar, 
    IonIcon, 
    IonTitle, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonCard, 
} from '@ionic/react';
import {  close, save } from 'ionicons/icons';
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
        mode='ios'
        isOpen={props.openModal}
        keyboardClose={false}
        showBackdrop={false}
        onDidDismiss={()=>props.setOpenModal(false)}
    >
        <IonHeader>
        <IonToolbar>
            	<IonTitle>				
                    Nueva materia
				</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent >
            <IonCard style={{height:'200px',padding:'5px'}}>
            <form onSubmit={evSubmit}>
                <IonItem style={{marginTop:4}}>
                    <IonLabel position="floating">Nombre:</IonLabel>
                    <IonInput 
                        autocomplete={'off'} 
                        value={materia} 
                        onIonChange={changed} 
                    />
                </IonItem>
                <IonButton disabled={materia===""} type="submit" style={{marginTop:40}} expand="full" >
                    Guardar <IonIcon style={{marginLeft:'20px'}} icon={save} />
                </IonButton>
            </form>
            </IonCard>
		</IonContent>
        <IonButton
            color='danger'
            onClick={()=>props.setOpenModal(false)}
        >
            cancelar
            <IonIcon icon={close} />
        </IonButton>
	</IonModal>);
}

export default ModalAgregarMateria;