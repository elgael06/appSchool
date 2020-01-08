import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, cog, power } from 'ionicons/icons';
import { connect } from 'react-redux';

import {removeUsuario } from './actions';
 

const AppTaps = ({children,onCloseSesion}:any) =>{
    return(<IonTabs>
        <IonRouterOutlet>
            {children}
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
            <IonTabButton tab="salir" href="/home" onClick={onCloseSesion}>
                <IonIcon icon={power} />
                <IonLabel>Salir</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>);
}

//export default AppTaps;


const mapStateToProps = (state:any) =>({
});

const mapDispatchToProps = (dispatch:any) =>({
  onCloseSesion(){
      dispatch(removeUsuario());
  }
});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(AppTaps);
