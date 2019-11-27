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
	IonBackButton,
	IonCardHeader,
	IonCardTitle,
	IonCard,
	IonContent,
	IonInput,
	IonItemGroup,
	IonItem,
	IonActionSheet
  } from '@ionic/react';
import React,{FC, useEffect} from 'react';
import { add, bookmarks } from 'ionicons/icons';
import { useState } from 'react';
import { insert, select } from '../../../manager/sql.services';
import ModalAgregarMateria from './ModalAgregarMateria';


const ite:Object[]=[];


const Materias : FC = () =>{
	const [openModal,setOpenModal] = useState(false);
	const [showToast,setShowToast] = useState(false);
	const [showActionSheet, setShowActionSheet] = useState(false);
	const [materias,setMaterias] = useState(ite);
	const [filtro,setFiltro] = useState('');

	useEffect(()=>{
		select.all.materias(1,function(items:any[]){
			setMaterias(items)
		});
	},[]);

    const insertMateriaMaestro = (idMateria:number)=>{
		insert.MateriasProfesor(1,idMateria)
		select.all.materias(1,function(items:any[]){
			setMaterias(items)
		})
	}
	
    const evSubmit  = (materia:string) => {
		console.log(materia)
		insert.Materia(materia)
		select.from.materiaTop(insertMateriaMaestro)
		setShowToast(true);
		setOpenModal(false)
	}
	
	const evOpcionMateria =(materia:number) =>{
		setShowActionSheet(true)
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
			{/** Filtro de lista Materias **/}
			<IonItem  slot="fixed" style={{heigth:300,marginTop:10, background:"#FFFFFF"}}>
				<IonInput 
					placeholder="Filtrar..." 
					value={filtro} 
					autocomplete="on" 
					onIonChange={(e:any)=>setFiltro(e.target.value.toUpperCase())} 
					
				/>
			</IonItem>
			
			<IonItemGroup style={{marginTop:70}}>

			{
				/**
				 * Lista de materias
				 */
				materias.length===0 ? <span>No Cuenta con Materias asignadas...</span> : 
					materias.filter((e:any)=>e.name.toUpperCase().search(filtro)>-1)
					.map((e:any)=><IonCard className="welcome-card" key={e.idMateria} onClick={()=>evOpcionMateria(e.idMateria)}>
					<IonCardHeader>
						<IonCardTitle><IonIcon icon={bookmarks} /> {e.name}</IonCardTitle>
					</IonCardHeader>
				</IonCard>)
			}

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

			<IonActionSheet 
				isOpen={showActionSheet}
				onDidDismiss={() => setShowActionSheet(false)}
				buttons={[
					{
						text: 'Editar',
						icon: 'edit',
						handler: () => {
						console.log('Edit clicked');
						}
					},
					{
						text: 'Eliminar',
						role: 'destructive',
						icon: 'trash',
						handler: () => {
						console.log('Delete clicked');
						}
					},
					{
						text: 'Cancel',
						icon: 'close',
						role: 'cancel',
						handler: () => {
						  console.log('Cancel clicked');
						}
					  }
				]}
			/>
		
		</IonItemGroup>
		
		</IonContent>

      </IonPage>);
}



export default Materias;