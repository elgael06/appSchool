import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLoading
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, power, cog } from 'ionicons/icons';

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


import Details from './pages/Details';

import Home from './containers/Home';
import Actions from './containers/Actions';
import Apps from './containers/Login';
import { iPropsUsuario } from './reducers/usuario';

interface iPropsApp{
	showLoading:boolean,
	setShowLoading:(e:boolean)=>any,
	usuario:iPropsUsuario
}

const App = ({showLoading, setShowLoading, usuario}:iPropsApp) =>{

	console.log(usuario)
	const evClose=()=>{
		console.log("salir...");
		window.location.href="/login";
	}
  
  return(<IonApp>

		<IonReactRouter>
		{usuario.id!==0 ?
		<IonTabs>

			<IonRouterOutlet>
				<Route path="/home" component={Home} exact />
				<Route path="/actions" component={Actions} exact />
				<Route path="/actions/materia" component={Materias} exact />
				<Route exact path="/asistencia" component={Asistencia} />
				<Route exact path="/asistencia/:id" component={Asistencia} />

				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route exact path="/login" render={() => <Redirect to="/home" />} />

				<Route path="/*" component={Error} />

			</IonRouterOutlet>

			
			<IonTabBar slot="bottom">

				<IonTabButton tab="home" href="/home">
					<IonIcon icon={home} />
					<IonLabel>Inicio</IonLabel>
				</IonTabButton>

				<IonTabButton tab="actions" href="/actions">
					<IonIcon icon={cog} />
					<IonLabel>Acciones</IonLabel>
				</IonTabButton>

				<IonTabButton tab="salir" onClick={evClose}>
					<IonIcon icon={power} />
					<IonLabel>Salir</IonLabel>
				</IonTabButton>

			</IonTabBar>

		</IonTabs> 
		: 
		<IonRouterOutlet>
				<Route path="/login" component={Apps} exact />
				<Route path="/login/Adduser" component={Details} />
				<Route path="/*" component={Error} />

		</IonRouterOutlet>
		}
		</IonReactRouter>

		<IonLoading
			isOpen={showLoading}
			onDidDismiss={() => setShowLoading(false)}
			message={'Cargando...'}
			duration={3000}
		/>

	</IonApp>
	);
  }



export default App;
