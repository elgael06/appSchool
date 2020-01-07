import React, { useEffect } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import { iPropsUsuario } from '../../reducers/usuario';
import { connect } from 'react-redux'
interface iPropsActions{
  usuario:iPropsUsuario
} 

const Actions = ({usuario}:iPropsActions) => {
  useEffect(()=>{
		const URL = window.location.pathname.split('/');
		console.log(URL[1])
		//if(URL[1]!=='apps')
			//{(usuario.id>0)  || (function(){window.location.href = "login"}())}
	});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonCard className="welcome-card" routerLink="/actions/materia">
          	<IonCardHeader>
				<IonCardTitle><IonIcon icon={addCircle} /> Materias</IonCardTitle>
          	</IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


const mapStateToProps = (state:any) =>({
  usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({
});

export default connect(mapStateToProps,mapDispatchToProps)(Actions);
