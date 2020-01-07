import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, cog, power } from 'ionicons/icons';


const AppTaps = ({children}:any) =>{
    const evClose=()=>{
		console.log("salir...");
		window.location.href="/login";
	}
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
            <IonTabButton tab="salir" onClick={evClose}>
                <IonIcon icon={power} />
                <IonLabel>Salir</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>);
}

export default AppTaps;
