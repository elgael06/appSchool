import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonToast,
	IonFab,
	IonFabButton,
	IonButtons,
	IonBackButton
  } from '@ionic/react';
import React,{FC} from 'react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import { insert, select } from '../../../manager/sql.services';
import ModalAgregarMateria from './ModalAgregarMateria';


const Materias : FC = () =>{
	const [openModal,setOpenModal] = useState(false);
    const [showToast,setShowToast] = useState(false);

    const insertMateriaMaestro = (idMateria:number)=>{
        insert.MateriasProfesor(1,idMateria)
	}
	
    const evSubmit  = (materia:string) => {
		console.log(materia)
		insert.Materia(materia)
		select.from.materiaTop(insertMateriaMaestro)
		setShowToast(true);
		setOpenModal(false)
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

        <ModalAgregarMateria 
			openModal={openModal}
			evSubmit={evSubmit}
			setOpenModal={setOpenModal}
		/>
		
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