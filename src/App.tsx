import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonLoading
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

interface iPropsApp{
	showLoading:boolean,
	usuario:iPropsUsuario
}

const App = ({showLoading, usuario}:iPropsApp) =>{
	
	console.log(usuario)
  
  return(<IonApp>
		<IonReactRouter>
		{usuario.id ?
		<AppTaps>
				<Route path="/home" component={Home} exact />
				<Route path="/actions" component={Actions} exact />
				<Route path="/actions/materia" component={Materias} exact />
				<Route exact path="/asistencia" component={Asistencia} />
				<Route exact path="/asistencia/:id" component={Asistencia} />

				<Route exact path="/login" render={() => <Redirect to="/home" />} />
				<Route exact path="/login/Adduser" render={() => <Redirect to="/home" />} />

				<Route path="/*" component={Error} />	
		</AppTaps>
		: 
		(<IonRouterOutlet>
				<Route exact path="/login" component={Login} />
				<Route exact path="/login/Adduser" component={AddUser} />

				<Route exact path="/home" render={() => <Redirect to="/login" />} />
				<Route exact path="/" render={() => <Redirect to="/login" />} />

				<Route path="/*" component={Error} />
		</IonRouterOutlet>)}
		</IonReactRouter>
		<IonLoading
			isOpen={showLoading}
			message={'Cargando...'}
			duration={3000}
		/>
	</IonApp>
	);
  }



const mapStateToProps = (state:any) =>({
    showLoading:state.showLoading,
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
