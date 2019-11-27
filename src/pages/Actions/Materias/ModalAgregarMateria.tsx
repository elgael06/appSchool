import React, { useState } from 'react';
import { IonContent, IonModal, IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { arrowBack, addCircle } from 'ionicons/icons';
import { iModal } from './interfaces';


const ModalAgregarMateria = (props:iModal) => {
	const [materia, setMateria] = useState('');
	

    const changed = (e:any) => {
        let r = e.target.value.toUpperCase();
        setMateria(r)
    }

	return(<IonContent> 
				<IonModal isOpen={props.openModal}>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start" onClick={()=>props.setOpenModal(false)}>
								<IonIcon icon={arrowBack} />
							</IonButtons>
							<IonTitle style={{marginTop:10}}>
								Agregar.
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonContent>
						<IonItem style={{marginTop:40}}>
							<IonLabel position="stacked">Nombre Materia</IonLabel>
							<IonInput placeholder="Escriba el nombre de la materia." autocomplete={'on'} value={materia} onIonChange={changed} ></IonInput>
						</IonItem>
						<IonButton style={{marginTop:40}} expand="full" onClick={()=>{props.evSubmit(materia);setMateria('')}} >
							Agregar 
							<IonIcon icon={addCircle} />
						</IonButton>
					</IonContent>
				</IonModal>
			</IonContent>
	);
}

export default ModalAgregarMateria;