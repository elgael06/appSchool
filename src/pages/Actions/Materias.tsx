import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonToast,
	IonModal,
	IonFab,
	IonFabButton,
	IonButtons,
	IonBackButton
  } from '@ionic/react';
import React,{FC} from 'react';
import { addCircle, add, close, backspace, arrowBack } from 'ionicons/icons';
import { useState } from 'react';
import { insert, select } from '../../manager/sql.services';

const Materias : FC = () =>{
	const [openModal,setOpenModal] = useState(false);
    const [materia, setMateria] = useState('');
    const [showToast,setShowToast] = useState(false);

    const insertMateriaMaestro = (idMateria:number)=>{
        insert.MateriasProfesor(1,idMateria)
	}
	
    const evSubmit  = () => {
		console.log(materia)
		insert.Materia(materia)
		select.from.materiaTop(insertMateriaMaestro)
		setMateria('');
		setShowToast(true);
		setOpenModal(false)
    }

    const changed = (e:any) => {
        let r = e.target.value.toUpperCase();
        setMateria(r)
    }

    return ( <IonPage>

        <IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonBackButton defaultHref="/actions" />
				</IonButtons>
            	<IonTitle style={{float:'left',marginTop:10}}>
				Materias. 
				</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent> 
			<IonModal isOpen={openModal}>
				<IonHeader>
          			<IonToolbar>
						<IonButtons slot="start" onClick={()=>setOpenModal(false)}>
							<IonIcon icon={arrowBack} />
						</IonButtons>
						<IonTitle style={{marginTop:10}}>
							Agregar Materia.
						</IonTitle>
					</IonToolbar>
				</IonHeader>
                <IonContent>
					<IonItem style={{marginTop:40}}>
						<IonLabel position="stacked">Nombre Materia</IonLabel>
                    	<IonInput placeholder="Escriba el nombre de la materia." autocomplete={'on'} value={materia} onIonChange={changed} ></IonInput>
					</IonItem>
					<IonButton style={{marginTop:40}} expand="full" onClick={evSubmit} >
						Agregar 
						<IonIcon icon={addCircle} />
                	</IonButton>
                </IonContent>
			</IonModal>
        </IonContent>
		
        <IonToast 
			isOpen={showToast}
			onDidDismiss={() => setShowToast(false)}
			message="Materia Agregada Satisfactoriamente."
			duration={3000}
			/>
		<IonFab vertical="bottom" horizontal="end" slot="fixed">
		<IonFabButton onClick={()=>setOpenModal(true)}>
			<IonIcon icon={add} />
		</IonFabButton>
		</IonFab>
      </IonPage>);
}

export default Materias;