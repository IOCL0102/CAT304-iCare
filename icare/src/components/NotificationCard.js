import React, {useState} from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const NotificationCard = (props) => {
    const[icon, setIcon] = useState(<NotificationsIcon />);
    //const[style, setStyle] = useState(style1);

    const handleMarkAsRead = () => {
        setIcon(<NotificationsNoneIcon />)
        //setStyle(style2);
        //hide button
    }

    return(
        <div>
            <span>
                 {icon}
             </span>
             <span>
                <div>
                     <h2>{props.title}</h2>
                 </div>
                 <div>
                     <p>{props.description}</p>
                 </div>
             </span>
             <span>
                {/* Tell database it is read */}
                <button onClick={handleMarkAsRead}>Mark As Read</button>
             </span>
        </div>
    )
}

export default NotificationCard;



// class NotificationCard extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             isRead: false
//         }
//     }

//     render(){
//         let icon 
//         if(this.state.isRead) {
//             icon = {<NotificationsNoneIcon />}
//         }else{
//             icon = {<NotificationsIcon />}
//         }
//     }

//     return <div>{icon}</div>
// }

// export default function NotificationCard(props){
//     return(
//         <div>
//             <span>
//                 <NotificationsIcon />
//             </span>
//             <span>
//                 <div>
//                     <h2>{props.title}</h2>
//                 </div>
//                 <div>
//                     <p>{props.description}</p>
//                 </div>
//             </span>
//         </div>
//     );
// }