import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import DateListItem from '../components/DateListItem';
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
            <p>The Financial Literacy Challenge (Fin Lit Challenge) is an academic and creative competition for high school and college students in Rhode Island learning about finance or economics. The competition consists of three main events: “Know Finance”; “Do Finance”; and “Explain Finance”. Each event awards cash prizes (from a total pool of more than $5000) and contributes points toward school totals for an overall competition.</p>
            <p style={{textAlign:'center'}}><IonButton href="https://forms.gle/cVHzKbyrKBPC2ggs5">Register to Receive Updates</IonButton></p>
            <h1>Know Finance</h1>
            <p>Students will complete a timed assessment of financial knowledge online within a certain competition window. Up to the date of the competition window, students will have the opportunity to submit questions to be included on the assessment. Scores on the quiz will be based on the number and difficulty of assessment items correctly answered.</p>
            <p>Cash prizes will be awarded for the top 5 places on the assessment, as well as to the student who contributes the most high-quality questions to the assessment. Schools will earn championship points for each student who places (100, 80, 60, 40, and 20 points, respectively), plus one point for every student who submits an accepted question, and one point for every student who scores in the top half.</p>
            <p>Accepted questions must be distinct from all previously submitted questions, relevant to financial literacy, and neither too easy nor too difficult.</p>
            <h1>Do Finance</h1>
            <p>Students will participate in a simulation of financial decision making. Each participant who completes the simulation will earn between 1 and 5 points for their school depending on the outcome of the simulation. A cash prize will be awarded to the participant who achieves the top score, with time to completion acting as a tie-breaker.</p>

            <h1>Explain Finance</h1>
            <p>Students will create explanations for common financial literacy topics. There are separate competition categories for different media types and topics. Media types:
              <ul>
                <li><b>Video</b> - create a tiktok-style video between 5 and 60 seconds in length. It must be either portrait or landscape layout with a 9:16 aspect ratio, preferably with dimensions 1080 x 1920.</li>
                <li><b>Image</b> - create an infographic or diagram, or a series of up to 5 images to be viewed together.</li>
                <li><b>Text</b> - create a textual explanation (formulas and up to 5 small images are permitted) of between 10 and 1000 words. This must be submitted as a PDF document (Microsoft Word, Google Docs, and many other software programs support PDF export).</li>
                <li><b>Creative</b> - this is for explanations that don't fit conveniently into any of the other categories. Can you explain finance using a board game? A podcast episode? A dance? A videogame? Something else? Submissions must consist of digital files, and must contain an explanation for how to use/access the submission.</li>
              </ul>
              Topics:
              <ul>
                <li><b>Earning Income</b> - qualifications and job value; non-salary benefits; non-financial aspects of job preference; long-term and short-term impacts of education and training; cost-benefit analysis; demand in the labor market; economic influences on employment; taxes</li>
                <li><b>Buying Goods and Services</b> - price, income, and preferences; effects of purchases on others (externalities); durability and maintenance; cost and value of information; donations and charitable values; government protection of consumers</li>
                <li><b>Saving</b> - now vs. later; inflation; real interest rates; nomial interest rates; projected value; governance and banking; government incentives and disincentives for saving; employer benefit programs for retirement saving</li>
                <li><b>Using Credit</b> - fees and APRs; introductory credit offers; unsecured or secured loans; down payments; credit scores; defaulting on loans; credit counseling services; bankruptcy; mortgages; credit disclosure statements; free credit score verification</li>
                <li><b>Financial Investing</b> - real returns; taxes on investments; impact of costs and fees on investment returns; impact of market beliefs on investment value; risk vs. return; short-term vs. long-term investments; diversification; impact of news on financial investments; impact of interest rates on investment value; loss aversion bias; familiarity bias; legally-required company disclosures; Securities and Exchange Commission</li>
                <li><b>Protecting and Insuring</b> - probabilities and risk; overestimation of rare events; insurance; legally required insurance; impact of insurance on risky behaviors; health insurance; disability insurance; property and casualty insurance; life insurance; goverment insurance programs; identity theft risks and protection; response to identity theft</li>
                <li><b>Other</b> - Is there a topic you think is vital to financial literacy that isn't included in this list? Submit an explanation of it under the "other" category.</li>
              </ul>
            </p>
            <p>Cash prizes will be awarded for first, second, and third place in each medium/topic combination. (Note that the "creative" category for medium will include all topics in a single event.) That's 22 sub-events! For each event, winners will receive 10, 7, and 4 championship points for their school, respectively. (Note that students must provide their submissions under a creative commons license.)</p>

            <h1>Overall Championship</h1>
            <p>The school with the most points overall by the end of the competition will receive a trophy for the overall championship, and all students from the winning team will get the chance to meet an exclusive guest from the financial industry.</p>
            <h1>Special Prizes</h1>
            <p>[Coming soon... Announcements will be sent out to registered participants.]</p>

            <p><b>NOTE: Entry in multiple events by one student both allowed and encouraged!</b></p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Important Dates</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <DateListItem date="Now" eventName="Planning and Learning" description="Register to receive updates about the competition, read over the rules, and start learning about financial literacy. You can even start working on your entries to the various events."/>
              <DateListItem date="January 1st, 2022" eventName="Competition Goes Live" description="The competition site and leaderboard will go live and begin accepting entries."/>

              <DateListItem date="April 2nd, 2022" eventName="Awards Ceremony" description="(Corresponds with the beginning of Financial Literacy Month.) Includes a meet-and-greet with industry professionals."/>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contest Eligibility</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>The Fin Lit Challenge is open to all high school and college or university students in Rhode Island. Students are encouraged to register for the competition with their .edu or .gov school email addresses; otherwise they must be able to provide proof of enrollment (such as the header of a recent transcript or gradesheet, or a photo of a student id).</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Students</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h1>Know Finance</h1>
            <ul>
              <li>Google is your friend. Try searching for any of the topics listed above.</li>
              <li><a href="https://www.investopedia.com/personal-finance-4427760">Investopedia</a></li>
              <li><a href="https://www.finrafoundation.org/millennials">FINRA</a>, which also features a <a href="http://www.usfinancialcapability.org/quiz.php">financial literacy quiz</a>.</li>
            </ul>
            <h1>Do Finance</h1>
            <p>
              Here are a set of simulations comparable to the one that will be used in the competition:
              <ul>
                <li><a href="https://shadysam.com/">Shady Sam</a> - Choose the loan options that are the worst for the consumer.</li>
                <li><a href="https://www.timeforpayback.com/">Payback</a> - Try to make smart financial decisions around college and living expenses.</li>
                <li><a href="https://www.jumpstart.org/what-we-do/support-financial-education/reality-check/">Reality Check</a> - A model of what financial situation is necessary to support different lifestyle choices.</li>
                <li><a href="http://playspent.org/">Spent</a> - A simulation of decision-making while caught in a debt trap.</li>
              </ul>
            </p>
            <h1>Explain Finance</h1>
            <ul>
              <li>Learn the content well first.</li>
              <li>Plan before creating the content. What are questions your audience will have?</li>
              <li>Search online for tips and tools for making effective content.</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resources for Teachers and Coaches</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Are you a coach or a teacher? Interested in empowering your students? Are you interested in claiming the championship trophy for your school? Here are some quick tips and resources to help you out:</p>
            <ul>
              <li>The resources for students contain helpful content that you can share with them as well.</li>
              <li>The points for the overall championship are awarded both for winning categories and for participation. Schools with more students involved stand a much better chance of winning.</li>
              <li>The Financial Literacy Standards document this competition is based on comes from the <a href="https://www.councilforeconed.org/wp-content/uploads/2013/02/national-standards-for-financial-literacy.pdf">Council for Economic Education</a>. It contains helpful suggestions you may pass along to your students.</li>
              <li>Schools can improve their odds of winning by coordinating efforts between student teams to reduce overlapping effort within events, particularly the "Explain Finance" category. Coaches or teachers who organize recurring meetings (e.g. monthly or weekly) will find it easier to offer feedback (and enable peer feedback) to participating students.</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sponsors and Organizers</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>The Fin Lit Challenge is organized by the CFA Society Providence in collaboration with the Financial Planning Association of Rhode Island, and is sponsored by Edapt Technologies. The competition organizer, Al Cumplido, can be contacted at jrcumplido @ icloud.com (remove spaces).</p>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <a href="https://www.cfasociety.org/providence"><img className="logo" src="./assets/CFA_Providence.png"/></a>
                </IonCol>
                <IonCol>
                  <a href="https://www.fpari.org/"><img className="logo" src="./assets/FPARI.png"/></a>
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
