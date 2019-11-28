import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, power, cog } from 'ionicons/icons';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Actions from './pages/Actions/Actions';
import Details from './pages/Details';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/actions" component={Actions} exact />
          <Route path="/actions/materia" component={Materias} exact />

          <Route path="/apps" component={Apps} exact />
          <Route path="/apps/details" component={Details} />

          <Route path="/asistencia" component={Asistencia} />
          <Route path="/asistencia/:id" component={Asistencia} />

          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
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
          <IonTabButton tab="apps" href="/apps">
            <IonIcon icon={power} />
            <IonLabel>Salir</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
