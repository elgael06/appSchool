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
	IonItemGroup,
	IonItem,
	IonActionSheet,
	IonAlert,
	IonSearchbar
} from '@ionic/react';
import React,{FC, useEffect} from 'react';
import { add, bookmarks } from 'ionicons/icons';
import { useState } from 'react';
import { insert, select, deleteFrom } from '../../../manager/sql.services';
import ModalAgregarMateria from './ModalAgregarMateria';
import { selectAllMateriasIdProfesor } from '../../../manager/firestone.services';
import { connect } from 'react-redux';


const ite:Object[]=[];

const Materias : FC = ({id_usuario}:any) =>{
	const [openModal,setOpenModal] = useState(false);
	const [showToast,setShowToast] = useState(false);
	const [mensajeToast,setMensaje] = useState('');
	const [showActionSheet, setShowActionSheet] = useState(false);
	const [alerta,setAleta] = useState(false);
	const [materias,setMaterias] = useState(ite);
	const [filtro,setFiltro] = useState('');
	const [materia,setMateria] = useState(0);

	useEffect(()=>{
		select.all.materias(1,function(items:any[]){
			setMaterias(items)
		});
		const mat = selectAllMateriasIdProfesor(id_usuario);
		console.log(mat);
	},[]);

    const insertMateriaMaestro = (idMateria:number)=>{
		insert.MateriasProfesor(1,idMateria)
		select.all.materias(1,function(items:any[]){
			setMaterias(items)
		})
	}
	
    const evSubmit  = (materia:string) => {
		console.log(materia)
		if(materias.findIndex((e:any)=>e.name===materia)===-1){
			insert.Materia(materia)
			select.from.materiaTop(insertMateriaMaestro)
			setMensaje("Materia agregada satisfactoriamente.");
		}else{
			setMensaje(`La materia ${materia} ya existe !!!`)
		}
		setShowToast(true);
		setOpenModal(false)
	}
	
	const evOpcionMateria =(index:number) =>{
		setShowActionSheet(true)
		setMateria(index)
	}

    return ( <IonPage>

        <IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonBackButton defaultHref="/actions" />
				</IonButtons>
            	<IonTitle style={{float:'left',marginTop:3}}>
				Materias
				</IonTitle>
          </IonToolbar>
        </IonHeader>

		<IonContent>
			{/** Filtro de lista Materias **/}
			<IonItem  slot="fixed" style={{marginTop:1, background:"#FFFFFF"}}>
				<IonSearchbar
				 placeholder="Buscar ..." 
				 value={filtro} 
				 autocomplete="off" 
				 onIonChange={(e:any)=>setFiltro(e.target.value.toUpperCase())}
				/>
			</IonItem>
			
			<IonItemGroup style={{marginTop:70}}>
			{materias.length===0 ? <span>Aun no cuenta con materias asignadas...</span> : 
				materias.filter((e:any)=>e.name.toUpperCase().search(filtro)>-1)
					.map((e:any)=><IonCard className="welcome-card" key={e.idMateria} onClick={()=>evOpcionMateria(e.idMateria)}>
					<IonCardHeader>
						<IonCardTitle><IonIcon icon={bookmarks} style={{float:'right'}}/> {e.name}</IonCardTitle>
					</IonCardHeader>
				</IonCard>)
			}
			</IonItemGroup>

			<ModalAgregarMateria 
				openModal={openModal}
				evSubmit={evSubmit}
				setOpenModal={setOpenModal}
			/>
			
			<IonToast 
				isOpen={showToast}
				animated
				position="bottom"
				onDidDismiss={() => setShowToast(false)}
				message={mensajeToast}
				duration={3000}
			/>

			<IonFab vertical="bottom" horizontal="end" slot="fixed">
				<IonFabButton onClick={()=>setOpenModal(true)}>
					<IonIcon icon={add} />
				</IonFabButton>
			</IonFab>

			<IonAlert 
				isOpen={alerta}
				onDidDismiss={()=>{setAleta(false); setMateria(0);}}
				header="Advertencia"
				message={`<strong>¿Desea eliminar la materia?</strong>`}
				buttons={[
					{
						text: 'No',
						role: 'cancel',
						cssClass: 'secondary',
						handler: () => {	
							console.log('Confirm Cancel: blah');
							setMateria(0);
						}
						},
						{
						text: 'Si',
						handler: () => {
							console.log('Confirm Okay',materia);
							deleteFrom.from.materias(materia)
							deleteFrom.from.materiaProfesor(materia,1)
							setTimeout(() => {
							select.all.materias(1,function(items:any[]){
								setMaterias(items)
							});
							}, 300);
						}
					}
				]}
			/>

			<IonActionSheet 
				isOpen={showActionSheet}
				onDidDismiss={() => setShowActionSheet(false)}
				buttons={[
					{
						text: 'Editar',
						icon: 'book',
						handler: () => {
						console.log('Editar clicked=>',materia);
						}
					},
					{
						text: 'Eliminar',
						role: 'destructive',
						icon: 'trash',
						handler: () => {
						console.log('Delete clicked=>',materia);
						setAleta(true)
						}
					},
					{
						text: 'Cancelar',
						icon: 'close',
						role: 'cancel',
						handler: () => {
						  console.log('Cancel clicked=>',materia);
						  setMateria(0);
						}
					  }
				]}
			/>
		
		</IonContent>

      </IonPage>);
}



//export default Materias;
const propsDispathState = (state:any)=>({
	id_usuario:state.Usuario.id
});
export default connect(propsDispathState,null)(Materias);