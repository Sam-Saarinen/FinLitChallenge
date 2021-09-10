import { IonButton } from '@ionic/react';
import { HashLink as Link } from 'react-router-hash-link';
import './SplashImage.css';

const SplashImage: React.FC = () => {
  return (
      <div className="container">
        {/*eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
        <img className="splash-image" src="./assets/FinLitSplash.jpg" alt="Financial Literacy Photo by Markus Spiske on Unsplash"/>
        <div className="splash-text">
          <h1>Fin-Lit Challenge</h1>
          <p>Rhode Island university and high school students compete for cash prizes while increasing financial literacy.</p>
          <Link to="./#CompetitionRules" smooth={true}><IonButton color="secondary">Learn More</IonButton></Link>
          {/* TODO: See if this is working. */}
        </div>
      </div>
  );
};

export default SplashImage;