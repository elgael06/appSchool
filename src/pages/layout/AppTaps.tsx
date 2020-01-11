import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, cog, logOut } from 'ionicons/icons';
import { connect } from 'react-redux';

import {removeUsuario } from './actions';

import * as firebase from "firebase/app";
 

const AppTaps = ({children,onCloseSesion}:any) =>{
    return(<IonTabs>
        <IonRouterOutlet>
            {children}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

        <IonTabButton tab="home" href="/home/">
            <IonIcon icon={home} />
                <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="actions" href="/actions/">
                <IonIcon icon={cog} />
                <IonLabel>Acciones</IonLabel>
            </IonTabButton>
            <IonTabButton tab="salir" href="/home/" onClick={onCloseSesion}>
                <IonIcon icon={logOut} />
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
        firebase.auth().signOut().then(()=>{            
            console.log('cerrar sesion');
            dispatch(removeUsuario());  
        }).catch(err=>{
            console.log(err);
        });
  }
});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(AppTaps);


  