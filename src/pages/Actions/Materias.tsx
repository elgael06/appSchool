import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent
  } from '@ionic/react';
import React,{FC} from 'react';
import { addCircle } from 'ionicons/icons';
import { useState } from 'react';
import { insert, select } from '../../manager/sql.services';

const Materias : FC = () =>{
    const [materia, setMateria] = useState('');

    const insertMateriaMaestro = (idMateria:number)=>{
        insert.MateriasProfesor(1,idMateria)
    }
    const evSubmit  = () => {
    console.log(materia)
    insert.Materia(materia)
    select.from.materiaTop(insertMateriaMaestro)
    setMateria('');
    }

    const changed = (e:any) => {
        let r = e.target.value;
        setMateria(r)
    }

    
    return ( <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Materia. 
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard  style={{heigth:400,marginTop:40}}>
                <IonCardContent>
                <IonItem>
                    <IonLabel position="stacked">Nombre Materia</IonLabel>
                    <IonInput placeholder="Escriba el nombre de la materia." autocomplete={'on'} value={materia} onIonChange={changed} ></IonInput>
                </IonItem>
                </IonCardContent>
                <hr />
                <IonCardContent>
                <IonButton expand="full" onClick={evSubmit} >
                    Agregar 
                    <IonIcon icon={addCircle} />
                </IonButton>
                </IonCardContent>
            </IonCard>
        </IonContent>
      </IonPage>);
}

export default Materias;