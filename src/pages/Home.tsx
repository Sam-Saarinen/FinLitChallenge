import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
            <p>The Financial Literacy Challenge (Fin Lit Challenge) is an an academic and creative competition for high school and college students in Rhode Island learning about finance or economics. The competition consists of three main events: “Know Finance”; “Explain Finance”; and “Do Finance”. Each event awards cash prizes (from a total pool of more than $5000) and contributes points toward school totals for an overall competition.</p>
            <p>Official Competition Rules will be released by September 17, 2021.</p>
            <p style={{textAlign:'center'}}><IonButton href="https://forms.gle/cVHzKbyrKBPC2ggs5">Register to Receive Updates</IonButton></p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contest Eligibility</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>The Fin Lit Challenge is open to all high school and college or university students in Rhode Island. Students are encouraged to register for the competition with their .edu or .gov school email addresses; otherwise they must be able to provide proof of enrollement (such as the header of a recent transcript or gradesheet, or a photo of a student id).</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Students</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>[Coming soon...]</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Teachers and Coaches</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>[Coming soon...]</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sponsors and Organizers</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>The Fin Lit Challenge is organized by the CFA Society Providence, and sponsored by Edapt Technologies. The competition organizer, Al Cumplido, can be contacted at jrcumplido @ icloud.com (remove spaces).</p>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <a href="https://www.cfasociety.org/providence"><img className="logo" src="./assets/CFA_Providence.png"/></a>
                </IonCol>
                <IonCol>
                  <a href="https://edapt.tech"><img className="logo" src="./assets/edapt.png"/></a>
                </IonCol>
              </IonRow>
            </IonGrid>
            <p>If you are interested in becoming a sponsor for the Fin Lit Challenge, please contact Al Cumplido using the address above.</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
