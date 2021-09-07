import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SplashImage from '../components/SplashImage';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Testing2</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Testing</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <SplashImage></SplashImage>
        <IonCard id="CompetitionRules">
          <IonCardHeader>
            <IonCardTitle>Contest Summary</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p></p>
            <IonButton href="https://forms.gle/cVHzKbyrKBPC2ggs5">Register to Receive Updates</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Eligibility</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p></p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Students</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p></p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Teachers and Coaches</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{'height':'1000px'}}>
            <p></p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
