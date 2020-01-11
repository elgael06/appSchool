import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonLoading,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonPage,
  IonContent,
  IonImg
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Asistencia from './pages/asistencia/';
import Error from './pages/Error';
import Materias from './pages/Actions/Materias/';

import AddUser from './pages/login/AddUser';

import Home from './pages/Home';
import Actions from './pages/Actions';
import Login from './pages/login';
import { iPropsUsuario } from './reducers/usuario';
import AppTaps from './pages/layout/AppTaps';

import { connect } from 'react-redux'
import { change_loading } from './actions/';
import { contact } from 'ionicons/icons';

interface iPropsApp{
	showLoading:boolean,
	usuario:iPropsUsuario,
	onLoading:(e:boolean)=>void
}

const App = ({showLoading, usuario,onLoading}:iPropsApp) =>{
	
	console.log(usuario)
  
  return(<IonApp >
	<IonReactRouter>
		{usuario.id ?
		<IonPage>
			<IonHeader mode='md'>
				<IonToolbar color='primary' mode='md'>
					<IonTitle >
						<u style={{padding:5,float:'left'}}>{usuario.nombre}</u> 
					{usuario.foto?
					<IonImg 
						src={usuario.foto} 
						alt='foto' 
						style={{position:'absolute',right:'-15px',top:'-3px',height:'40px',with:'40px'}} 
					/>:
					<IonIcon 
						icon={contact}
						style={{position:'absolute',right:'15px',top:'-2px',fontSize:'35px'}}
					/>}
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<AppTaps>
					<Route exact={true} path="/home/" component={Home} />
					<Route exact={true} path="/actions/" component={Actions} />
					<Route exact={true} path="/materia/Edit" component={Materias} />
					<Route exact={true} path="/asistencia" component={Asistencia} />
					<Route exact={true} path="/asistencia/:id" component={Asistencia} />

					<Route exact={true} path="/login" render={() => <Redirect to="/home" />} />
					<Route exact={true} path="/" render={() => <Redirect to="/home" />} />
					<Route exact={true} path="/login/Adduser" render={() => <Redirect to="/home" />} />

					<Route path="/*" component={Error} />
				</AppTaps>
			</IonContent>
		</IonPage>
		: 
		(<IonRouterOutlet>
				<Route exact path="/login" component={Login} />
				<Route exact path="/login/Adduser" component={AddUser} />

				<Route exact path="/home" render={() => <Redirect to="/login" />} />
				<Route path="/*" render={() => <Redirect to="/login" />} />

				<Route path="/*" component={Error} />
		</IonRouterOutlet>)}
	</IonReactRouter>
		<IonLoading
			isOpen={showLoading}
			message={'Cargando...'}
			duration={3000}
			onDidDismiss={()=>onLoading(false)}
		/>
	</IonApp>
	);
  }



const mapStateToProps = (state:any) =>({
    showLoading:state.showLoading,
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({
	onLoading(status:boolean){
		dispatch(change_loading(status))
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
