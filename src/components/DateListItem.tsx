import { IonItem } from "@ionic/react";
import './DateListItem.css';

const DateListItem: React.FC<{date:string, eventName:string, description?:string}> = ({date, eventName, description, ...props}) => {
    return (
        <IonItem>
            <span className="date">{date}</span><span className="event-name">{eventName}</span>
            {description && <span className="description">{description}</span>}
        </IonItem>
    );
  };
  
  export default DateListItem;